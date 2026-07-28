<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from '$app/paths';
  import { decodeSync, importSync } from '$lib/sync';

  // 'fora' = link aberto no navegador (não no PWA instalado): no iOS o storage é
  // SEPARADO — importar aqui gravava no lugar errado e mostrava sucesso falso.
  let estado = $state<'lendo' | 'preview' | 'ok' | 'erro' | 'fora'>('lendo');
  let detalhe = $state('');
  let codigo = $state('');
  let previa = $state<{ ale: number; dea: number } | null>(null);
  let copiado = $state(false);

  onMount(() => {
    const m = window.location.hash.match(/s=(DE1.[A-Za-z0-9_-]+)/);
    if (!m) {
      estado = 'erro';
      detalhe = 'Kein Code in diesem Link. Lass dir einen neuen schicken.';
      return;
    }
    codigo = m[1];
    const data = decodeSync(codigo);
    if (!data) {
      estado = 'erro';
      detalhe = 'Ungültiger Code — lass einen neuen erzeugen.';
      return;
    }
    const standalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (navigator as unknown as { standalone?: boolean }).standalone === true;
    if (!standalone) {
      estado = 'fora';
      return;
    }
    // Dentro do app: mostra o que vai entrar e ESPERA confirmação (merge é
    // irreversível — união sem undo).
    previa = { ale: data.ale.length, dea: data.dea.length };
    estado = 'preview';
  });

  function confirmar() {
    const r = importSync(codigo);
    if (r) {
      estado = 'ok';
      detalhe = `Zusammengeführt: +${r.ale} und +${r.dea}. 🎉`;
    } else {
      estado = 'erro';
      detalhe = 'Ungültiger Code.';
    }
  }

  async function copiar() {
    try {
      await navigator.clipboard.writeText(codigo);
      copiado = true;
    } catch {
      /* iOS antigo sem clipboard API — o textarea abaixo permite copiar na mão */
    }
  }
</script>

<div class="mt-10 text-center">
  {#if estado === 'lendo'}
    <p>Code wird gelesen…</p>
  {:else if estado === 'preview'}
    <h1 class="text-2xl font-extrabold">Syncen? 🔄</h1>
    <p class="mt-2 text-carvao/70">
      Der Code enthält {previa?.ale ?? 0} + {previa?.dea ?? 0} erledigte Teile. Beim Import wird
      alles zusammengeführt und nichts gelöscht.
    </p>
    <button class="btn-primary mt-4" onclick={confirmar}>Jetzt importieren</button>
  {:else if estado === 'ok'}
    <h1 class="text-2xl font-extrabold text-salvia">Fertig ✅</h1>
    <p role="status" class="mt-2 text-carvao/70">{detalhe}</p>
  {:else if estado === 'fora'}
    <h1 class="text-2xl font-extrabold">Fast geschafft 📲</h1>
    <p class="mx-auto mt-2 max-w-sm text-carvao/70">
      Der Link ging im <b>Browser</b> auf — dein Fortschritt liegt aber in der <b>¡Dime!-App</b> auf
      dem Startbildschirm. Kopier den Code und füg ihn dort ein:
    </p>
    <ol class="mx-auto mt-3 max-w-sm space-y-1 text-left text-sm text-carvao/70">
      <li>1. Tipp unten auf <b>Code kopieren</b></li>
      <li>2. Öffne die <b>¡Dime!</b>-App auf dem Startbildschirm (am Rechner: die Kursstartseite)</li>
      <li>3. Unter <b>Sync</b> einfügen und importieren</li>
    </ol>
    <button class="btn-primary mt-4" onclick={copiar}>
      {copiado ? '✅ Kopiert' : '📋 Code kopieren'}
    </button>
    <textarea
      class="mx-auto mt-3 block w-full max-w-sm rounded-xl border border-black/10 bg-white p-2 text-[10px] text-carvao/60"
      rows="3"
      readonly
      onclick={(e) => (e.currentTarget as HTMLTextAreaElement).select()}>{codigo}</textarea
    >
  {:else}
    <h1 class="text-2xl font-extrabold text-terracota">Hmm… 🤔</h1>
    <p role="status" class="mt-2 text-carvao/70">{detalhe}</p>
  {/if}
  <a href="{base}/" class="btn-primary mt-6 inline-block">Zum Kurs</a>
</div>

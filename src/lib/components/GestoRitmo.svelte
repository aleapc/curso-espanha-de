<script lang="ts">
  import { onMount } from 'svelte';

  let {
    gesto,
    rotulo = false,
    tamanho = 'g'
  }: { gesto: 1 | 2 | 3 | 4; rotulo?: boolean; tamanho?: 'g' | 'p' } = $props();

  // A mão de ritmo — o equivalente espanhol da mão de maestro dos cursos tonais.
  // Aqui a mão não desenha ALTURA (não há tom): desenha RITMO e ARTICULAÇÃO.
  //
  // OS QUATRO PROGRAMAS DESTE SKU SÃO OS DO PAR DE-ES, NÃO OS DO PAR EN-ES.
  // O invariante (PRODUTO §3.4) é a MÃO; o alvo dela é ativo de par e re-deriva-se.
  // A troca está declarada em docs/DERIVACAO-DE.md §1.3:
  //   M1 Takt        — ritmo silábico: toda sílaba paga igual (o alemão também é
  //                    acentual e também comprime a átona: MESMO peso do par EN)
  //   M2 flache Hand — MESMA forma, ALVO TROCADO: já não é o ditongo (o alemão tem
  //                    monotongo tenso), é a ÁTONA FINAL reduzida a schwa ("nochə")
  //   M3 Gleiten     — NOVO. Entra na vaga do soco, que saiu porque o erro que ele
  //                    traía (o "-o tax") não existe aqui: `Hospitál` já é alemão.
  //                    A mão desliza sem parar, um zug por sintagma, e trai o
  //                    Knacklaut: não dá para deslizar contínuo e picar `el hotel`.
  //   M4 Schnippen   — o tap do "r" simples, peso AUMENTADO (o r alemão é uvular e
  //                    não tem âncora no padrão; o trill continua dispensado)
  const dados = {
    1: {
      cor: '#2D6E7E',
      cap: 'gleiche Schläge · gleiche Länge',
      hint: 'ca-fé con le-che',
      d: 'M48,60 L216,60',
      marcas: [48, 90, 132, 174, 216],
      alturas: [0, 0, 0, 0, 0]
    },
    2: {
      cor: '#7FA98C',
      cap: 'flache Hand · Endsilbe halten',
      hint: 'no-che · tar-de',
      d: 'M48,60 L216,60',
      marcas: [48, 216],
      alturas: [0, 0]
    },
    3: {
      cor: '#C84B31',
      cap: 'gleiten · ein Zug pro Wortgruppe',
      hint: 'e-los-pi-tal',
      // Uma passada só, sem nenhum degrau no meio: as duas marcas são o início e o
      // fim do sintagma, e é exatamente a ausência de marca interna que trai o
      // Knacklaut — não dá para deslizar contínuo e picar `el ¦ hospital`.
      d: 'M48,66 C104,66 160,52 216,52',
      marcas: [48, 216],
      alturas: [0, 0]
    },
    4: {
      cor: '#ECB365',
      cap: 'kurzes Schnippen · ein Schlag',
      hint: 'pe-ro · ca-ro',
      d: 'M48,60 Q132,26 216,60',
      marcas: [132],
      alturas: [-18]
    }
  } as const;

  const g = $derived(dados[gesto]);
  const larg = $derived(tamanho === 'g' ? '240px' : '150px');

  let reduzir = $state(false);
  onMount(() => {
    reduzir = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
  });
</script>

<div class="tg" style="width: {larg}">
  {#if rotulo}
    <div class="lbl">
      <span class="n" style="color: {g.cor}">M{gesto}</span>
      <span class="hz">{g.hint}</span>
    </div>
  {/if}
  <svg viewBox="0 0 240 96" role="img" aria-label={`Handbewegung ${gesto}: ${g.cap}`}>
    <line x1="44" y1="60" x2="224" y2="60" class="grid" />

    {#each g.marcas as x, i}
      <line
        x1={x}
        y1={60 + g.alturas[i]}
        x2={x}
        y2={72}
        stroke={g.cor}
        stroke-width={g.alturas[i] < -20 ? 4 : 2.5}
        stroke-linecap="round"
        opacity={g.alturas[i] < -20 ? 1 : 0.5}
      />
    {/each}

    <path
      d={g.d}
      fill="none"
      stroke={g.cor}
      stroke-width="3.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      pathLength="100"
      stroke-dasharray="100"
      stroke-dashoffset={reduzir ? 0 : 100}
    >
      {#if !reduzir}
        <animate
          attributeName="stroke-dashoffset"
          dur="2s"
          repeatCount="indefinite"
          values="100;0;0"
          keyTimes="0;0.7;1"
        />
      {/if}
    </path>

    {#if reduzir}
      <text x="216" y="60" class="mao" text-anchor="middle" dominant-baseline="central">✋</text>
    {:else}
      <text class="mao" text-anchor="middle" dominant-baseline="central"
        >✋<animateMotion
          dur="2s"
          repeatCount="indefinite"
          keyPoints="0;1;1"
          keyTimes="0;0.7;1"
          calcMode="linear"
          path={g.d}
        /></text
      >
    {/if}
  </svg>
  <div class="cap">{g.cap}</div>
</div>

<style>
  .tg {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1px;
    max-width: 100%;
  }
  svg {
    width: 100%;
    height: auto;
    display: block;
  }
  .grid {
    stroke: #2b2b2b;
    opacity: 0.12;
    stroke-dasharray: 2 4;
  }
  .mao {
    font-size: 22px;
  }
  .cap {
    font-size: 12px;
    color: rgba(43, 43, 43, 0.6);
    text-align: center;
  }
  .lbl {
    display: flex;
    align-items: baseline;
    gap: 6px;
  }
  .lbl .n {
    font-weight: 800;
    font-size: 12px;
    letter-spacing: 0.03em;
  }
  .lbl .hz {
    font-size: 14px;
    color: #2b2b2b;
    font-variant: small-caps;
  }
</style>

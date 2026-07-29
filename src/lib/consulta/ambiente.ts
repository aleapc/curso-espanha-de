// A FAIXA "NOW" — a cultura virando ambiente, com zero toque.
//
// Saber que a cozinha só acorda às oito e meia NÃO é fala: não vira card e não
// compete por tile (PRODUTO.md §6). Vira isto — uma linha no topo da tela que a
// pessoa lê sem pedir, na hora exata em que a informação morde.
//
// O REGISTRO É UPBEAT, e é a regra que importa aqui: *"you're early, not late"*,
// nunca *"you missed it"*. As mesmas horas que em c01a ("The Spanish clock is a
// gift") — café e torrada antes das nove, o cortado das onze, la comida das duas
// às três e meia, a merienda das seis, a cozinha acordando às oito e meia, la
// cena a partir das nove, últimos pedidos lá pelas onze e meia.
//
// Nada aqui é datado nem regional: é o relógio do país, que é o mesmo em julho e
// em janeiro. Nada de "hoje é domingo, tudo fechado" — isso varia por cidade e
// entraria como inferência vestida de fato.
//
// O texto de cada faixa vai para o alemão junto com o resto do app (o comprador
// é alemão). Registro informal ("du"), upbeat.

export interface Ambiente {
  /** HH:MM na Espanha peninsular. */
  hora: string;
  /** Minutos desde a meia-noite, para decidir a faixa. */
  minutos: number;
  /** A linha de contexto. Uma frase, dita a quem está de pé no meio da rua. */
  linha: string;
}

/** Hora peninsular. Se o aparelho não tiver as zonas do ICU, cai na hora local. */
function horaEmEspanha(d: Date): { hora: string; minutos: number } {
  try {
    const partes = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Europe/Madrid',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    }).formatToParts(d);
    const h = Number(partes.find((p) => p.type === 'hour')?.value);
    const m = Number(partes.find((p) => p.type === 'minute')?.value);
    if (Number.isFinite(h) && Number.isFinite(m)) {
      return {
        hora: `${String(h % 24).padStart(2, '0')}:${String(m).padStart(2, '0')}`,
        minutos: (h % 24) * 60 + m
      };
    }
  } catch {
    /* sem base de fusos → hora do aparelho */
  }
  const h = d.getHours();
  const m = d.getMinutes();
  return {
    hora: `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`,
    minutos: h * 60 + m
  };
}

// Faixas do dia, do começo de cada uma. A última cobre a virada da meia-noite.
const FAIXAS: { de: number; linha: string }[] = [
  { de: 0, linha: 'Die Küchen sind zu, die Bars nicht. Bitt um die Rechnung, bevor sie es tun.' },
  { de: 5 * 60, linha: 'Noch hat nichts auf. Die ersten Cafés ziehen gegen sieben die Rollläden hoch.' },
  { de: 7 * 60, linha: 'Frühstück heißt Kaffee und eine Scheibe Toast im Stehen an der Theke. Mehr ist es nicht.' },
  { de: 10 * 60 + 30, linha: 'Vormittags legt die ganze Straße für einen Cortado und eine Kleinigkeit eine Pause ein.' },
  { de: 12 * 60, linha: 'Zu früh fürs Mittagessen. Ein Vermut und eine Tapa sind jetzt genau richtig.' },
  { de: 14 * 60, linha: 'Jetzt wird zu Mittag gegessen, und das menú del día ist das beste Preis-Leistungs-Verhältnis Spaniens.' },
  { de: 15 * 60 + 30, linha: 'La sobremesa: Der Tisch gehört dir, bis du die Rechnung verlangst. Niemand wartet.' },
  { de: 16 * 60 + 30, linha: 'Die Küchen haben Schichtwechsel. Eine Bar stellt dir trotzdem eine Tapa hin.' },
  { de: 18 * 60, linha: 'La merienda — Kaffee und etwas Süßes. Bis zum Abendessen sind es noch drei Stunden.' },
  { de: 20 * 60, linha: 'Die Küchen wachen auf. Reservier für halb zehn, dann läufst du auf spanischer Zeit.' },
  { de: 21 * 60, linha: 'Überall haben die Küchen offen. Fürs Abendessen bist du früh dran, nicht spät.' },
  { de: 22 * 60 + 30, linha: 'Zehn Uhr ist hier mitten am Abend. Die letzten Bestellungen gehen gegen halb zwölf rein.' }
];

export function ambienteAgora(d: Date = new Date()): Ambiente {
  const { hora, minutos } = horaEmEspanha(d);
  let linha = FAIXAS[0].linha;
  for (const f of FAIXAS) if (minutos >= f.de) linha = f.linha;
  return { hora, minutos, linha };
}

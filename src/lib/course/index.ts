import type { ModuloOutline } from '../types';
import { outline } from './outline.gen';

// A LINHA DIVISÓRIA DESTE ARQUIVO.
//
// `outline` é GERADO (outline.gen.ts): título, ordem e módulo saem dos próprios
// episódios e do contrato de slots, porque título copiado à mão em dois lugares
// já fez duas partes reescritas aparecerem na tela com o nome antigo.
//
// O que está ABAIXO é apresentação — como as partes se agrupam em cards na
// home, o nome e o emoji de cada grupo. Isso é decisão visual, é escrita à mão,
// e não se mexe sem pedir.
//
// ── O QUE ESTE ARQUIVO ERA ATÉ O ANDAIME ────────────────────────────────────
// Ele era o índice do curso INGLÊS, copiado inteiro: 24 títulos em inglês e um
// comentário que dizia, com todas as letras, "UI e conteúdo em INGLÊS (o
// comprador é britânico/americano)" — dentro do SKU alemão. Resíduo de clone
// exatamente do tipo que este repositório já pagou caro: a mesma página em cinco
// projetos porque ninguém abriu o arquivo. Agora o título deriva do episódio e
// não há mais uma segunda canônica para ele.

export { outline };
export type { ModuloOutline };

// Nome e emoji de cada grupo de cards. A chave é o prefixo do id da parte
// (`e01a` → `e01`) — forma LEGADA, de quando o id era "episódio + parte".
//
// Este SKU nasceu direto no contrato de 36 slots: todo id é `b01`, `i04`, `a08`,
// nenhum tem a forma legada, e portanto CADA PARTE É UM CARD SOZINHA, com o
// próprio título. O mapa fica aqui vazio de propósito, e não copiado do curso
// inglês: os grupos de lá ("Sounds, rhythm and the repair kit", "Before you fly")
// são recortes da estrutura antiga de 24 partes, que este curso não tem.
// Se um dia a home ganhar agrupamento, ele é escrito aqui, em alemão, à mão.
const EP_META: Record<string, { nome: string; emoji: string }> = {
  'b-suoni': { nome: 'Laute und erste Wörter', emoji: '🗣️' },
  'b-frontiera': { nome: 'Vor der Abreise und die Grenze', emoji: '✈️' },
  'b-arrivo': { nome: 'Die Ankunft', emoji: '🧳' },
  'b-muoversi': { nome: 'Sich in der Stadt bewegen', emoji: '🚇' },
  'b-tavola': { nome: 'Bar und Tisch', emoji: '🍽️' },
  'b-comprare': { nome: 'Einkaufen', emoji: '🛍️' },
  'b-stanza': { nome: 'Das Zimmer', emoji: '🏨' },
  'b-storto': { nome: 'Wenn es schiefgeht', emoji: '🆘' },
  'i-ritmo': { nome: 'Ihr Rhythmus', emoji: '🕘' },
  'i-tavola': { nome: 'Zu Tisch mit ihnen', emoji: '🍷' },
  'i-conversa': { nome: 'Ins Gespräch einsteigen', emoji: '💬' },
  'a-segnali': { nome: 'Die Zeichen lesen', emoji: '👂' },
  'a-vengono': { nome: 'Woher sie kommen', emoji: '🏛️' },
  'a-congedo': { nome: 'Der Abschied', emoji: '👋' }
};

// Agrupamento das partes de slot (b01…a08) nos episódios da jornada. O inglês
// agrupava pelo id legado (e01a→e01); as partes de slot não têm essa forma, então
// o mapa abaixo é explícito. Isso põe os 4 cursos na mesma estrutura de jornada.
const SLOT_EPISODIO: Record<string, string> = {
  b01: 'b-suoni', b02: 'b-suoni', b03: 'b-suoni',
  b04: 'b-frontiera', b05: 'b-frontiera',
  b06: 'b-arrivo', b07: 'b-arrivo',
  b08: 'b-muoversi', b09: 'b-muoversi', b10: 'b-muoversi',
  b11: 'b-tavola', b12: 'b-tavola', b13: 'b-tavola', b14: 'b-tavola',
  b15: 'b-comprare',
  b16: 'b-stanza',
  b17: 'b-storto', b18: 'b-storto',
  i01: 'i-ritmo', i02: 'i-ritmo', i04: 'i-ritmo',
  i03: 'i-tavola', i07: 'i-tavola', i08: 'i-tavola', i10: 'i-tavola',
  i05: 'i-conversa', i06: 'i-conversa', i09: 'i-conversa',
  a01: 'a-segnali', a02: 'a-segnali', a07: 'a-segnali',
  a03: 'a-vengono', a04: 'a-vengono', a05: 'a-vengono', a06: 'a-vengono',
  a08: 'a-congedo'
};

export interface ParteCard {
  id: string;
  letra: string;
  titulo: string;
  pronta: boolean;
}
export interface EpisodioCard {
  id: string;
  nome: string;
  emoji: string;
  partes: ParteCard[];
}
export interface NivelCards {
  nivel: string;
  nome: string;
  cor: string;
  descricao: string;
  episodios: EpisodioCard[];
}

export const niveis: NivelCards[] = outline.map((mod) => {
  const groups: Record<string, EpisodioCard> = {};
  const ordem: string[] = [];
  for (const l of mod.licoes) {
    // Só agrupa quem tem a forma legada (`e01a`). Cortar a última letra de `b06`
    // daria `b0`, que colide com `b08` — foi assim que, no curso inglês, duas
    // aulas sem nenhuma relação apareceram como um card só e a segunda sumiu da
    // tela sem erro em lugar nenhum.
    const legado = /^[a-z]\d{2}[a-z]$/.test(l.id);
    const epId = SLOT_EPISODIO[l.id] ?? (legado ? l.id.slice(0, -1) : l.id);
    if (!groups[epId]) {
      const meta = EP_META[epId] ?? { nome: l.titulo, emoji: '🎧' };
      groups[epId] = { id: epId, nome: meta.nome, emoji: meta.emoji, partes: [] };
      ordem.push(epId);
    }
    const titulo = l.titulo.includes('—') ? l.titulo.split('—').pop()!.trim() : l.titulo;
    groups[epId].partes.push({
      id: l.id,
      letra: legado ? l.id.slice(-1).toUpperCase() : '',
      titulo,
      pronta: l.pronta
    });
  }
  return {
    nivel: mod.nivel,
    nome: mod.nome,
    cor: mod.cor,
    descricao: mod.descricao,
    episodios: ordem.map((id) => groups[id])
  };
});

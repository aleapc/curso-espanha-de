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
const EP_META: Record<string, { nome: string; emoji: string }> = {};

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
    const epId = legado ? l.id.slice(0, -1) : l.id;
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

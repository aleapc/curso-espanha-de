import type { Folha, Tile } from './tipos';

// TAXONOMIA DO MODO CONSULTA — ¡Dime! DE → Espanha
//
// O turista chega com uma de duas consultas: "estou em X" (sabe onde o corpo está,
// em zero segundo) ou "acabou de acontecer Y" (cauda longa, infinita). A segunda
// NÃO é enumerável, e é por onde a deriva defensiva entra: se cada lugar ganhar um
// galho "quando dá errado", o índice reproduz os 46% de moldura de perda que o
// curso levou meses para tirar.
//
// Por isso: nível 1 = LUGAR (12 fixos) · nível 2 = INTENÇÃO, na ordem do arco da
// cena, com "algo deu errado" como UMA FOLHA no fim — nunca um galho. O reativo
// puro fica num único tile de doze (8%).
//
// POR QUE DOZE, e a razão é física: 375×812, header ~90 px, safe-area ~80 px →
// ~640 px úteis. Tile legível a braço estendido sob sol = 92 px + 10 px de gap =
// 102 px por linha. Seis linhas × duas colunas = 12 tiles, tela cheia, zero
// rolagem. E o rótulo alemão é MAIS LONGO que o inglês — «Apotheke & sich mies
// fühlen» contra «Chemist & feeling rough» — então três colunas continuam fora de
// questão e o rótulo é o item que se encurta, nunca a contagem.
//
// ── O QUE É IDÊNTICO EM TODO SKU, E O QUE NÃO É ─────────────────────────────
// NÍVEL 1 É IDÊNTICO: os mesmos 12 tiles, com os MESMOS `id`, a MESMA `ordem` e
// o MESMO `icone` do curso inglês. Um por um, nada entra, nada sai, nada troca de
// lugar. É memória muscular entre destinos e é o ativo de cross-sell: quem comprou
// o da Espanha reconhece o da Itália no primeiro toque, porque "pagar" continua
// sendo o quarto tile. A ORDEM É FIXA PARA SEMPRE DEPOIS DO LANÇAMENTO — quem
// decorou a posição não pode ser realfabetizado por uma refatoração.
//
// O `rotulo` é a SUPERFÍCIE do tile, não a identidade dele, e vai para o alemão
// junto com o resto do app. Deixá-lo em inglês num produto alemão não preservaria
// identidade nenhuma: quebraria justamente o cross-sell, porque o comprador que
// reconhece o tile é um comprador que lê alemão. Identidade = id + ordem + ícone
// + significado; rótulo = tradução. Se a intenção do contrato for outra — rótulo
// literalmente congelado em inglês nos 12 —, é uma linha por tile para desfazer.
//
// NÍVEL 2 é local (tapa vs ración só aqui; os cinco tons só no Phûut!) e também
// em alemão. Duas folhas ganharam recheio próprio deste SKU, e ambas estão
// declaradas como ANDAIME lá embaixo: elas nomeiam a decisão do par, não a do
// destino, e quem escrever B02/I02/I10 confirma ou troca.

export const TILES: Tile[] = [
  { id: 'chegar', ordem: 1, rotulo: 'Hallo & tschüss', icone: 'porta' },
  { id: 'mesa', ordem: 2, rotulo: 'Bar & Restaurant', icone: 'garfo' },
  { id: 'dieta', ordem: 3, rotulo: 'Vertrage ich nicht', icone: 'escudo' },
  { id: 'pagar', ordem: 4, rotulo: 'Bezahlen', icone: 'cartao' },
  { id: 'taxi', ordem: 5, rotulo: 'Taxi & Mietwagen', icone: 'carro' },
  { id: 'transporte', ordem: 6, rotulo: 'Metro & Bahn', icone: 'trilho' },
  { id: 'quarto', ordem: 7, rotulo: 'Hotel & Zimmer', icone: 'cama' },
  { id: 'compras', ordem: 8, rotulo: 'Läden & Markt', icone: 'sacola' },
  { id: 'saude', ordem: 9, rotulo: 'Apotheke & Beschwerden', icone: 'cruz' },
  { id: 'simpatia', ordem: 10, rotulo: 'Nettes zum Sagen', icone: 'brinde' },
  { id: 'reparo', ordem: 11, rotulo: 'Nicht verstanden', icone: 'ouvido' },
  { id: 'apuro', ordem: 12, rotulo: 'Es ist schiefgelaufen', icone: 'alerta' }
];

// Nível 2 — LOCAL da Espanha, rótulos em alemão. `reativa: true` marca a folha de
// "deu errado": sempre a última do tile, e contada pelo G8 (teto de 15% dos cards).
export const FOLHAS: Folha[] = [
  // 1 · chegar
  { id: 'chegar/entrar', tile: 'chegar', rotulo: 'Reingehen' },
  { id: 'chegar/balcao', tile: 'chegar', rotulo: 'Am Tresen bedient werden' },
  { id: 'chegar/ultimo', tile: 'chegar', rotulo: '«Wer ist der Letzte?»' },
  { id: 'chegar/sair', tile: 'chegar', rotulo: 'Rausgehen' },
  // ANDAIME. No SKU inglês esta folha é «Tú or usted, in one line» — o anglófono
  // não tem a máquina T/V e decide no escuro. O comprador alemão TEM Sie/du e a
  // roda calibrada para a Alemanha, onde Sie é o default no balcão; na Espanha o
  // default é `tú`. O problema muda de "escolher" para "recalibrar", e o rótulo
  // segue essa mudança. Confirmar ao escrever B02/I02.
  { id: 'chegar/tu-usted', tile: 'chegar', rotulo: 'Sie ist nicht usted: tú am Tresen' },

  // 2 · mesa
  { id: 'mesa/mesa', tile: 'mesa', rotulo: 'Ein Tisch' },
  { id: 'mesa/carta', tile: 'mesa', rotulo: 'Die Karte' },
  { id: 'mesa/bebida', tile: 'mesa', rotulo: 'Etwas zu trinken' },
  { id: 'mesa/comida', tile: 'mesa', rotulo: 'Essen' },
  { id: 'mesa/tamanho', tile: 'mesa', rotulo: 'Tapa, ración oder media' },
  { id: 'mesa/agua-pao', tile: 'mesa', rotulo: 'Wasser & Brot' },
  { id: 'mesa/conta', tile: 'mesa', rotulo: 'Die Rechnung' },
  { id: 'mesa/errado', tile: 'mesa', rotulo: 'Das habe ich nicht bestellt', reativa: true },

  // 3 · dieta
  { id: 'dieta/dizer', tile: 'dieta', rotulo: 'Sagen (die drei Stufen)' },
  { id: 'dieta/cartao', tile: 'dieta', rotulo: 'Die Karte zeigen' },
  { id: 'dieta/o-que-tem', tile: 'dieta', rotulo: 'Was ist da drin?' },
  { id: 'dieta/sem', tile: 'dieta', rotulo: 'Ohne Fleisch / ohne Schwein / ohne Gluten' },
  { id: 'dieta/nao-levam-a-serio', tile: 'dieta', rotulo: 'Sie nehmen es nicht ernst', reativa: true },
  { id: 'dieta/acontecendo', tile: 'dieta', rotulo: 'Es passiert gerade', reativa: true },

  // 4 · pagar
  { id: 'pagar/pedir', tile: 'pagar', rotulo: 'Nach der Rechnung fragen' },
  // ANDAIME. No SKU inglês: «Card — and "en euros"», porque o britânico paga em
  // libras e a maquininha oferece DCC. O comprador da zona do euro paga em euros
  // com Karte in Euro: o DCC NÃO EXISTE para ele e `sin conversión` sai do curso.
  // O que sobra de caro no cartão aqui é outra coisa — ver B14. Confirmar ao
  // escrever B14; esta folha pode acabar mudando de recheio inteiro.
  { id: 'pagar/cartao', tile: 'pagar', rotulo: 'Mit Karte zahlen' },
  { id: 'pagar/dinheiro', tile: 'pagar', rotulo: 'Bargeld & der Fünfziger' },
  { id: 'pagar/gorjeta', tile: 'pagar', rotulo: 'Trinkgeld' },
  { id: 'pagar/rachar', tile: 'pagar', rotulo: 'Getrennt zahlen' },
  { id: 'pagar/errado', tile: 'pagar', rotulo: 'Falsche Rechnung, falsches Wechselgeld', reativa: true },

  // 5 · taxi
  { id: 'taxi/destino', tile: 'taxi', rotulo: 'Sagen, wohin' },
  { id: 'taxi/taximetro', tile: 'taxi', rotulo: 'Taxameter & Preis' },
  { id: 'taxi/parar', tile: 'taxi', rotulo: 'Hier halten / Quittung' },
  { id: 'taxi/locadora', tile: 'taxi', rotulo: 'Der Mietwagenschalter' },
  { id: 'taxi/estacionar', tile: 'taxi', rotulo: 'Parken & die ZBE-Kamera' },
  { id: 'taxi/errado', tile: 'taxi', rotulo: 'Keine Karte / falsche Richtung', reativa: true },

  // 6 · transporte
  { id: 'transporte/bilhete', tile: 'transporte', rotulo: 'Der richtige Fahrschein' },
  { id: 'transporte/qual-trem', tile: 'transporte', rotulo: 'Metro, cercanías oder Renfe' },
  { id: 'transporte/plataforma', tile: 'transporte', rotulo: 'Gleis & Zugang' },
  { id: 'transporte/bagagem', tile: 'transporte', rotulo: 'Gepäck & Scanner' },
  { id: 'transporte/placas', tile: 'transporte', rotulo: 'Schilder, die Geld kosten' },
  { id: 'transporte/perdi', tile: 'transporte', rotulo: 'Ich habe ihn verpasst', reativa: true },

  // 7 · quarto
  { id: 'quarto/checkin', tile: 'quarto', rotulo: 'Check-in' },
  { id: 'quarto/pedir', tile: 'quarto', rotulo: 'Um etwas bitten' },
  { id: 'quarto/nao-funciona', tile: 'quarto', rotulo: '«No funciona»' },
  { id: 'quarto/mala', tile: 'quarto', rotulo: 'Den Koffer dalassen' },
  { id: 'quarto/checkout', tile: 'quarto', rotulo: 'Check-out & die Kurtaxe' },

  // 8 · compras
  { id: 'compras/balcao', tile: 'compras', rotulo: 'An der Theke' },
  { id: 'compras/quanto', tile: 'compras', rotulo: 'Was kostet / welche Größe' },
  { id: 'compras/so-olhando', tile: 'compras', rotulo: 'Ich schaue nur' },
  { id: 'compras/pagar', tile: 'compras', rotulo: 'Zahlen & der Kassenbon' },
  { id: 'compras/devolver', tile: 'compras', rotulo: 'Zurückbringen', reativa: true },

  // 9 · saude
  { id: 'saude/algo-para', tile: 'saude', rotulo: '«Etwas gegen…»' },
  { id: 'saude/receita', tile: 'saude', rotulo: 'Mit oder ohne Rezept' },
  { id: 'saude/minha-alergia', tile: 'saude', rotulo: 'Meine Allergie, mein Medikament' },
  { id: 'saude/guardia', tile: 'saude', rotulo: 'Farmacia de guardia' },
  { id: 'saude/112', tile: 'saude', rotulo: '112 & das Krankenhaus', reativa: true },

  // 10 · simpatia — a folha que o G8 protege com um piso de 8 cards.
  // É onde a viagem fica boa, e é exatamente a que a deriva defensiva esvazia:
  // nas 252 frases-alvo do curso antigo, a ÚNICA fala de apreciação que o aluno
  // produzia era «¿Qué me recomienda?».
  { id: 'simpatia/elogiar-comida', tile: 'simpatia', rotulo: 'Das Essen loben' },
  { id: 'simpatia/elogiar-lugar', tile: 'simpatia', rotulo: 'Den Ort loben' },
  { id: 'simpatia/agradecer', tile: 'simpatia', rotulo: 'Danke & tschüss' },
  { id: 'simpatia/brindar', tile: 'simpatia', rotulo: 'Anstoßen' },
  { id: 'simpatia/puxar-conversa', tile: 'simpatia', rotulo: 'Ein Gespräch anfangen' },
  { id: 'simpatia/convite', tile: 'simpatia', rotulo: 'Eine Einladung annehmen oder ablehnen' },

  // 11 · reparo
  { id: 'reparo/devagar', tile: 'reparo', rotulo: 'Langsamer / noch mal' },
  { id: 'reparo/escreve', tile: 'reparo', rotulo: 'Schreiben Sie es auf / zeigen Sie es mir' },
  // ANDAIME. Fica em INGLÊS como degrau universal de propósito: em Mallorca
  // «¿Hay alguien que hable alemán?» funciona e em Sevilha não, e instalar a fuga
  // para o alemão dentro do kit de reparo é ensinar o aluno a não usar o curso.
  // O alemão como fato local sai uma vez, em I09/A05. Confirmar ao escrever B03.
  { id: 'reparo/ingles', tile: 'reparo', rotulo: 'Sprechen Sie Englisch? (und wenn nicht)' },
  { id: 'reparo/como-se-diz', tile: 'reparo', rotulo: 'Wie sagt man…?' },
  { id: 'reparo/apontar', tile: 'reparo', rotulo: 'Zeigen und bekommen' },

  // 12 · apuro — o único tile reativo. Um de doze: 8%.
  { id: 'apuro/roubo', tile: 'apuro', rotulo: 'Ich bin bestohlen worden', reativa: true },
  { id: 'apuro/perdi', tile: 'apuro', rotulo: 'Ich habe etwas / jemanden verloren', reativa: true },
  { id: 'apuro/denuncia', tile: 'apuro', rotulo: 'Polizei & Anzeige', reativa: true },
  { id: 'apuro/112', tile: 'apuro', rotulo: '112', reativa: true },
  { id: 'apuro/golpes', tile: 'apuro', rotulo: 'Die Maschen, beim Namen', reativa: true },
  { id: 'apuro/reclamacoes', tile: 'apuro', rotulo: 'Hoja de reclamaciones', reativa: true }
];

// Cards com JANELA DE DATA: aeroporto, fronteira e pré-embarque são eventos de UMA
// VEZ SÓ. Um tile permanente para algo usado num único dia custa 1/12 da tela por
// doze dias. Estes não têm tile: são empurrados pela faixa "Jetzt" nos 7 dias antes
// do voo e no dia, e continuam alcançáveis pela busca.
//
// ANDAIME na janela `fronteira`: num voo Schengen interno não há controle de
// fronteira nenhum para este comprador. A janela NÃO some (ela é do produto, não
// do par), mas o que ela empurra muda de balcão — quem faz as três perguntas aqui
// é o check-in do hotel e o balcão da locadora. Confirmar ao escrever B05.
export const JANELAS = [
  { id: 'antes-de-voar', de: -7, ate: -1, rotulo: 'Vor dem Abflug' },
  { id: 'fronteira', de: 0, ate: 0, rotulo: 'Ankunft & der erste Schalter' },
  { id: 'volta', de: 'ultimo-dia', ate: 'ultimo-dia', rotulo: 'Nach Hause' }
] as const;

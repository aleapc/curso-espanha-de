# DERIVAÇÃO DE — o que muda quando o comprador é alemão

> **O documento de par do SKU `DE → Espanha`.** Diz o que muda em relação ao `EN → Espanha` já publicado, e por quê. Vai **junto** com toda tarefa de escrita das 36 partes, depois do `PRODUTO.md` e antes da `GRADE`.
> **Vigência:** 2026-07-28 · **Escopo:** SKU `curso-espanha-de` · **Leitura obrigatória** de quem escreva parte, syllabus, quiz, card de consulta ou copy de loja deste SKU.

**Em conflito:** `PRODUTO.md` vence sempre · `slots.json` vence sobre texto · este documento vence sobre a `GRADE-36-ESPANHA.md`, que é do **outro par** e cujas linhas de par (âncora fonética, falso amigo, inversão de polidez, roster de moldes) **não são fonte para este SKU**.

**Régua de evidência (LEI, `PRODUTO` §preâmbulo):** **FATO** = medido no repo ou lido em fonte citada · **INFERÊNCIA** = projeção declarada · **NÃO CONFERIDO** = sem fonte externa nem revisor nativo. **Nada NÃO CONFERIDO vira áudio.** Este documento contém as três coisas e todas estão marcadas.

---

## 0. A lei da portabilidade, aplicada com número

**LEI (`PRODUTO` §10, anti-padrão 9):** *porta-se a ESTRUTURA, nunca o TEXTO.* O precedente negativo está neste mesmo repositório — uma `metodologia.md` de tailandês que é cópia verbatim do espanhol e **ainda fala de voseo**. Um documento assim não é inútil: é ativamente perigoso, porque o agente seguinte o lê como spec.

### 0.1 O que se reusa, medido

**FATO, medido em `curso-espanha/src/lib/course/*.json` em 2026-07-28** (script de contagem por `audioKey` × `voz`, chaves únicas):

| camada | audioKeys únicos | vozes | destino no DE |
|---|---:|---|---|
| **fala espanhola** | **752** | Carmen 359 · Emilio 377 · Ivan 9 · Matilda 7 | **reuso verbatim, mesmo `audioKey`, custo de crédito ZERO** |
| **voz-guia** | **1.306** | Alice 1.208 · George 98 | **regrava inteiro em alemão** (Juli + Thomas) |
| **total** | **2.058** | | 2.473 *ocorrências* (uma chave pode aparecer em vários steps) |

> **Ressalva do split Carmen/Emilio (reconferida em 2026-07-28, revisão).** Os números da linha 1 foram remedidos contra os 752 mp3 em disco e batem com `audio.config.json`. **Quatro chaves são ambíguas na origem** — `i05-esquina-e`, `i05-pulpo-c`, `i05-tipico-e` e `i07-buenapinta-e` são declaradas ora com `voz: Carmen`, ora com `voz: Emilio` em partes diferentes do curso EN, e existe **um** mp3 para cada. É defeito herdado do par EN, não do andaime, e o andaime portou a declaração de cada casa como estava. Quem escrever I05, I07 ou I08 **decide qual é a voz certa e corrige nas duas casas** antes de a parte entrar em vigor; enquanto isso o mp3 tocado é o mesmo nos dois lugares e o risco é só de rótulo.

> **Cuidado de leitura, e ele é da mesma família do aviso de `chars/clipe` do `PRODUTO` §9.** O briefing que abriu este trabalho cita **2.467 clipes** e **1.715 de voz-guia**. São a régua de **ocorrência**, medida em outro momento; a régua de **chave única** dá 2.058 / 1.306. **Os 752 batem exatamente nas duas.** Ao citar qualquer um destes números, diga qual das duas réguas você está usando — foi assim que o `chars/clipe` se perdeu uma vez.

**O que isso significa na prática:** o corredor DE herda **todo o áudio espanhol** e nenhuma narração. É o SKU mais barato do catálogo depois do EN — **desde que ninguém precise de uma frase espanhola nova**. E vai precisar: ver §5.

### 0.2 O que NÃO se reusa, e é o ponto

Três camadas se **re-derivam**, não se traduzem, porque são **ativo de PAR** (`slots.json` → `dono: par`; `PRODUTO` §3.2 regra 6 e §7):

1. **A âncora fonética e o programa motor de B01** — §1 deste documento.
2. **O roster de moldes inteiro** (`moldes.json`) — §2. **Isto vale inclusive para os moldes cuja CASA cai num slot `dono: destino`**: `PRODUTO` §3.2 regra 5 diz que a economia de catálogo **não cobre a camada de molde**. Oito das doze casas do roster EN caem em slots de destino, e mesmo assim as doze se re-derivam.
3. **O inventário de falso amigo de B10** — §1.6, e ele é quase 100% descartado.

E há uma quarta, que o briefing não previa e que é a maior surpresa deste trabalho: **B04 e B05 são `dono: destino` no contrato e mesmo assim colapsam**, porque o conteúdo deles não é sobre a Espanha — é sobre o **estatuto jurídico do comprador**. Ver §4.1. Isso não muda o contrato (o slot não some, muda de recheio, regra 1), mas muda o orçamento e precisa estar escrito.

**Aviso ao autor, e é o único que quebra o produto:** **INV-5.** A guia (Juli/Thomas) **nunca** fala espanhol; Carmen e Emilio **nunca** falam alemão. O `G14` (integridade de voz × língua) ainda é **PENDENTE** no script, e o `PRODUTO` §apêndice registra que *"o SKU alemão tem mp3 em inglês sob chaves alemãs"* — o acidente já aconteceu neste repositório. Enquanto o G14 não existir, isto é conferência humana obrigatória em toda entrega.

---

## 1. A INVERSÃO FONÉTICA

### 1.1 A reformulação que muda B01 inteiro

O curso inglês trata o erro do comprador como **problema de boca**: o anglófono não consegue produzir a vogal pura, o tap, a jota. Os quatro programas motores de `GestoRitmo.svelte` existem para forçar a boca.

**Para o alemão, a boca já faz quase tudo.** O que erra é o **olho**.

> ### O erro nº 1 do comprador alemão não é articulatório. É ortográfico.
> **O alemão tem em casa todos os sons de que o espanhol de viagem precisa, menos um. O que ele não tem é a regra de leitura — e o espanhol, que é transparente, mente para ele em sete lugares.**

Isso satisfaz o eixo *"Erro nº 1"* do `PRODUTO` §7 (*"toda língua tem **um** modo dominante de errar: ele merece gag recorrente"*) e substitui integralmente a gag do curso inglês, o **"-o tax"** (`hos-pi-TAL`), que **não se aplica** — §1.3, linha da tônica.

**Consequência de redação, e ela é dura:** o gag alemão é uma **regra de leitura**, e regra de leitura em áudio-curso é armadilha — vira palestra e estoura o G4. A solução é a mesma que o produto já usa em B10: **cada regra vem grudada a uma palavra que o aluno já vai dizer naquela parte**, nunca numa tabela lida em voz alta. Sete regras espalhadas por sete partes, uma por vez, sempre dentro de uma frase-alvo que já existia. Zero clipe de tabela.

### 1.2 A tabela, fenômeno a fenômeno

Legenda: **BRINDE** = já está na L1, custa ~0 · **BARATO** = existe em forma próxima, custa uma linha · **CARO** = não existe, precisa de tempo próprio · **NOVO** = o curso inglês não tem este item.

| # | fenômeno | para o INGLÊS | para o ALEMÃO | consequência no curso |
|---|---|---|---|---|
| **1** | **As 5 vogais puras (qualidade)** | **CARO.** O inglês ditonga sistematicamente (`no` → "nou", `sí` → "seey"). É o programa 2 (palma plana + hold test) e o `PRODUTO` §3.4 registra que é *"o teste mais limpo dos quatro"* | **BARATO.** O alemão tem monotongos tensos /iː eː aː oː uː/. `no`, `sí`, `casa` saem quase certos de primeira | **B01: o bloco de vogais cai de ~4 min para ~1 min.** O programa 2 **não é aposentado** — é **repropositado** (linha 2). O tempo liberado vai para as linhas 6 (⟨qu⟩/⟨v⟩/⟨z⟩) e 5 (o encadeamento) |
| **2** | **A vogal átona final (o schwa)** | **CARO** e já coberto pelo mesmo programa 2 | **CARO, e é a metade que sobrevive.** O alemão reduz átona final a schwa: `-e` → [ə], `-er` → [ɐ]. `noche`, `tarde`, `carne`, `grande`, `siete`, `Emilio` viram "nochə", "tardə". **INFERÊNCIA fonológica, confirmar com revisor nativo** | **O programa 2 muda de alvo, não de forma.** A palma plana sai da vogal **tônica** (anti-ditongo, inglês) e vai para a vogal **átona final** (anti-schwa, alemão): *"segure a palma plana no último som da palavra; se ela cair, você comeu o `e`."* O gesto continua **traindo o erro** — a palma não fica plana se a boca encolhe a vogal —, que é o requisito do `PRODUTO` §3.4 |
| **3** | **Ritmo silábico × acentual** | **CARO.** O inglês é acentual e comprime as átonas. É o programa 1 (metrônomo) | **CARO — e este é o item que o briefing dava como resolvido e NÃO está.** O alemão **também é acentual e também reduz átonas** (`Banane` → [baˈnaːnə]). A vantagem alemã é de **qualidade** de vogal, não de **ritmo** | **O programa 1 fica com o MESMO peso. Não devolva este tempo.** Escrever *"o alemão já tem vogais puras, então o ritmo vem junto"* é o erro de leitura mais provável deste SKU e ele **não se sustenta** |
| **4** | **A jota (`jamón`, `ajo`, `Juan`)** | **CARO.** Não existe em inglês; entra por `loch` (UK) / `Bach` (US), com espelho embaçado | **BRINDE NO SOM, CARO NA LETRA.** O alemão tem [x] (`Bach`, `Buch`, `doch`) e [ç] (`ich`). O som sai de primeira. **Mas ele o escreve ⟨ch⟩** — diante de ⟨j⟩ o alemão lê [j] (`ja`), e produz **"yamón"** | **O bloco da jota cai de ~90 s para ~30 s e muda de natureza:** de treino de boca para **regra de leitura**. Uma frase: *"⟨j⟩ = o `ch` de `Bach`. Sempre. Nunca o `j` de `ja`."* Ressalva: diante de ⟨e⟩/⟨i⟩ (`jefe`, `gente`, `girar`) o alemão tende ao [ç] de `ich`; o espanhol peninsular continua velar/uvular. **Uma linha, não um bloco** |
| **5** | **O encadeamento × o golpe de glote (`Knacklaut`)** | **inexistente como problema.** O inglês encadeia naturalmente (`an apple`) | **CARO, NOVO, e é o candidato a programa motor.** O alemão insere golpe de glote antes de vogal inicial (`ein ¦ Apfel`). O espanhol **ressilabifica obrigatoriamente**: `los otros` → [lo-**so**-tros], `el hotel` → [e-**lo**-tel], `una hora` → [u-na-**o**-ra], `más o menos`, `¿Puedo entrar?`. O alemão pica cada palavra. **INFERÊNCIA fonológica bem estabelecida; confirmar com revisor nativo** | **Entra como programa motor novo** (§1.3). É o único fenômeno da lista que satisfaz sozinho o teste do `PRODUTO` §3.4 — *"que movimento de mão torna o erro impossível de esconder?"*: **não dá para deslizar a mão continuamente e dar golpe de glote no meio.** E ele ataca o que mais faz o alemão *soar* estrangeiro depois de acertar todos os sons |
| **6** | **⟨qu⟩, ⟨v⟩, ⟨z⟩, ⟨c⟩+e/i, ⟨s⟩, ⟨h⟩, ⟨ll⟩ — as regras de leitura** | **quase inexistente.** O inglês tem ⟨qu⟩ = [kw] (próximo), ⟨v⟩ = [v] (sonoro, próximo de [β]), ⟨h⟩ aspirado (mesmo problema), ⟨z⟩ = [z] | **CARO, NOVO, e é o erro nº 1.** Sete interferências, e **três delas caem em cima do vocabulário mais usado do curso**: ⟨qu⟩ = [kv] → **`quería` vira "kveria"**, `¿qué?` vira "kve", `queso`, `¿quién?` · ⟨v⟩ = [f] → **`vale` vira "fale"**, `vino` vira **`fino`** (que é uma bebida real e pedível) · ⟨z⟩ e ⟨c⟩+e/i = [ts] → `plaza` vira "platsa", `cerveza` vira "tservetsa", `gracias` vira "gratsias" · ⟨s⟩ intervocálico = [z] → `casa` vira "kaza" · ⟨h⟩ = [h] → **`¿Hay…?` vira "Hai"**, `hola`, `hotel`, `hasta` · ⟨ll⟩ = [l] → `me llamo` vira "me lamo" (compartilhado com o inglês) | **É aqui que vai o tempo liberado pelas vogais.** Não como tabela: **uma regra por parte, grudada a uma palavra da própria parte.** ⟨v⟩ em B02 (`vale`) · ⟨qu⟩ em B11/B12 (`quería`, `¿qué?`) · ⟨h⟩ em B08 (`¿Hay…?`) · ⟨z⟩/⟨c⟩ em B01 e B14 (`gracias`, `precio`) · ⟨s⟩ em B02 (`gracias`, `casa`) · ⟨ll⟩ em B16 (`la llave`). **O par mínimo `vino` × `fino` é a gag recorrente do SKU** — é engraçado, é falsificável no balcão e o erro pede a coisa errada, que é o critério do INV-17 (*"erro fatal previsível é ensinado como piada memorável antes de acontecer"*) |
| **7** | **A distinción (`gracias`, `cerveza`, `plaza`, `cinco`)** | **BRINDE declarado, zero gate.** O inglês tem `th` de `think`. O curso inglês literalmente a chama de *"the gift"* | **CARO — e não é o CARO que se espera.** O alemão não tem /θ/, mas **o problema dele não é produzir [s] no lugar**: é produzir **[ts]**, por interferência de ⟨z⟩. `cerveza` → "tservetsa" **não é seseo, é ininteligível** | **Vira bloco próprio de ~60 s, que o curso inglês não tem, com a decisão de produto invertida:** o modelo no áudio segue **distinción obrigatória** (INV-21 e a decisão já registrada em `pesquisa-espanha.md` §2.9 — modelo em seseo é o erro do Hablá). Na **produção**, a permissão é explícita e a proibição é cirúrgica: **[θ] é o alvo, [s] é aceito e não custa nada, [ts] está proibido.** E há uma permissão geográfica que o curso inglês não podia dar com esta força: **as Canárias são zona de seseo** (`pesquisa-espanha.md` §2.9, RAE/ASALE) — e as Canárias são **22% do destino alemão** (§3.1). Para esse aluno, [s] **é a forma local** |
| **8** | **O `r` — tap e vibrante** | **CARO, mas com apoio.** O anglófono tem um `r` alveolar e o tap existe no `butter` americano / `pot o' tea`. É o programa 4 (flick), com **dispensa explícita do trill** | **MAIS CARO.** O `r` padrão alemão é **uvular** [ʁ] — outro ponto de articulação, não outra variante. E o alemão **vocaliza o `-r` final** em [ɐ]: `por favor` → "poa favoa". Não há âncora nativa no alemão padrão | **O programa 4 (flick) SOBE de peso e ganha o tempo que as vogais devolveram.** Duas notas de autoria: (a) **a âncora existe, mas é regional** — falantes do sul da Alemanha, Áustria e Suíça têm `r` alveolar; o curso pode oferecê-la como *"se você é do sul, você já tem"*, nunca como pressuposto; (b) a **dispensa do trill continua valendo e fica ainda mais importante**, porque o alemão não tem por onde chegar nele |
| **9** | **A sílaba tônica** | **CARO.** É o programa 3 (soco) e ele carrega o **"-o tax"**: o inglês diz `HOSpital`, `HOtel`, `REStaurant`, `ANimal` | **BRINDE, e é a maior economia isolada da tabela.** O alemão acentua os latinismos **onde o espanhol acentua**: `Hospitál`, `Hotél`, `Restauránt`, `Natúrell`, `Balkón`, `Telefón`; `Schokoláde` bate com `chocoláte` na penúltima. **O GUIRI ALERT nº 1 do curso inglês não tem função neste SKU** | **O programa 3 (soco) é REBAIXADO de programa próprio a batida dentro do programa 1.** O que sobra dele é real mas pequeno: o acento gráfico como informação (`papá`×`papa`, `está`×`esta`, `habló`×`hablo`) e as três regras de tônica, que passam para o `aprofundar`. **Esta é a troca que abre vaga para o programa novo da linha 5** |
| **10** | **Duração vocálica** | inexistente como problema | **BARATO, NOVO.** O alemão tem quantidade fonológica (`Bahn`×`Bann`, `Beet`×`Bett`) e alonga a tônica: `caro` → [ˈkaːʁo]. O espanhol não tem contraste de duração | **Uma linha dentro do programa 1**, não um bloco: *"todas as sílabas têm o mesmo tamanho; a tônica é mais **forte**, não mais **longa**."* Ela faz trabalho duplo, porque é exatamente o que o metrônomo já pede |
| **11** | **Consoante final** | pequeno | **BRINDE.** O alemão ensurdece a final (`Rad`=`Rat`) — e o espanhol peninsular faz o mesmo com `-d` (`Madrid` → [maðˈɾiθ]/[maˈðɾit]). **`usted`, `ciudad`, `verdad` saem certos por acidente** | Zero tempo. Registrar no `aprofundar` e não gastar áudio |
| **12** | **`ñ`** | **BARATO.** Âncora `onion`/`canyon` (e `canyon` **é** `cañón` emprestado) | **BARATO.** Âncora `Kognak`/`Champagner`; o alemão produz [nj] sem esforço | **Igual ao inglês, ~30 s.** Nenhuma mudança |
| **13** | **`ll` / `y` (yeísmo)** | **BARATO** e mal resolvido nos dois | **BARATO, com atalho que o inglês não tem:** o ⟨j⟩ alemão **é** o som certo. *"⟨ll⟩ e ⟨y⟩ = o `j` de `ja`."* Uma frase resolve — e ela **reaproveita a letra que a linha 4 acabou de proibir para a jota**, o que é bom desenho: a mesma letra alemã aparece duas vezes, uma como proibição e uma como atalho | **~20 s, e ganha um par com a linha 4.** É a única regra de leitura deste SKU que joga a favor |

**Resumo do saldo de tempo em B01 (INFERÊNCIA sobre a estrutura medida de `ep-e01a`):** sai o bloco longo de vogais, sai o GUIRI ALERT do "-o tax", sai a hipercorreção do `th`; entra o bloco de regras de leitura, entra o bloco do encadeamento, engorda o bloco do `r`. **B01 continua com 4 programas motores e ~16 min.** Não é uma parte mais fácil — é uma parte com **outro** conteúdo.

### 1.3 O programa motor de B01 — os quatro do alemão

**LEI (`PRODUTO` §3.4, `slots.json` → `invariante_do_gesto`):** *toda língua ganha uma mão em B01, sem exceção; o gesto tem que **trair** o erro, não ilustrar a regra.* O número de programas **não** é lei; o componente é ativo de par e o `GestoRitmo.svelte` do EN **não se reusa como está**.

| # | programa | movimento | erro que ele trai | vs. o EN |
|---|---|---|---|---|
| **1** | **metrônomo** | batidas iguais | a compressão da átona (o alemão é acentual como o inglês) | **MANTIDO, mesmo peso.** Absorve o soco como batida forte e a nota de duração |
| **2** | **palma plana (hold)** | palma segura, sem curva, **na última sílaba** | **comer a vogal átona final** (`nochə`) — não mais o ditongo | **MANTIDO, alvo trocado.** Mesma forma, outro erro |
| **3** | **o deslize** ⟵ NOVO | mão desliza lateralmente **sem parar**, uma passada por sintagma | o **golpe de glote** entre palavras: não dá para deslizar contínuo e picar `el ¦ hotel` | **NOVO.** Ocupa a vaga aberta pelo rebaixamento do soco |
| **4** | **flick** | um toque | o `r` uvular e o `-r` vocalizado | **MANTIDO, peso AUMENTADO** |

**A troca declarada, para que ninguém a leia como perda:** *sai o **soco** (programa próprio), entra o **deslize**.* O soco existia no EN para trair o "-o tax", e o "-o tax" não existe no alemão (linha 9). **Um sai porque o erro dele sumiu; um entra porque um erro novo apareceu.** Isso é derivação; acrescentar um quinto programa "porque o alemão também erra isso" seria inflar.

**O reuso de A01 (`PRODUTO` §3.4, item 2 da GRADE EN) sobrevive intacto e fica melhor:** enquanto a voz espanhola derruba o `-s`, a guia gesticula o **programa 1** — as batidas continuam iguais mesmo com o segmento sumido. Para o alemão, acrescenta-se o **programa 3**: a fala rápida espanhola **encadeia mais**, não menos, e o deslize é a demonstração de que o que ele ouve como "uma palavra comprida" são três palavras coladas. É a virada emocional de A01, e ela fica mais forte neste par do que no inglês.

**Componente:** arquivo novo (`GestoRitmoDE.svelte` ou equivalente), com os mesmos três requisitos duros do original — trair o erro, `role="img"` + `aria-label`, `prefers-reduced-motion` respeitado.

### 1.4 O bloco que o curso inglês não tem: `vino` × `fino`

**Recomendação de autoria (ORIENTAÇÃO, com o motivo escrito).** O INV-17 pede que o erro fatal previsível seja **piada antes de acidente**. O melhor candidato deste par é o ⟨v⟩:

- `un vino tinto` dito com ⟨v⟩ alemão → **`un fino`** → chega um xerez seco, que é **outra bebida, correta e pedível**. O erro não trava a cena: entrega a coisa errada. Isso o torna engraçado em vez de assustador, e falsificável — o aluno pode conferir na primeira noite.
- `vale` → "fale" é a segunda metade da mesma gag, e `vale` é a palavra mais frequente do curso inteiro depois de `gracias`.

**Custo:** o par `vino`/`fino` exige **dois clipes espanhóis novos** se não existirem no acervo de 752. Entra no orçamento de §5. **Não invente que existe** — confira no manifesto antes de escrever.

### 1.5 O que o curso inglês faz e este NÃO deve fazer

- **Não chamar a distinción de "brinde".** Ela é brinde para o inglês e **custo** para o alemão. Copiar essa frase é o anti-padrão 9 em uma linha.
- **Não escrever GUIRI ALERT do "-o tax".** `Hospitál` já é alemão.
- **Não usar `think` como âncora do [θ].** O aluno não tem `think`.
- **Não prometer que "as vogais são de graça".** São, na qualidade; **não** no ritmo nem na átona final (linhas 2 e 3).
- **Não portar o par mínimo `casa`×`caza`** como o item de percepção principal: para o alemão o par que dói é `casa` × "kaza" (o ⟨s⟩ sonoro), que é outro eixo.

### 1.6 B10 — o inventário de falso amigo se re-deriva quase inteiro

**Este é o slot mais mal servido por uma tradução, e por isso está aqui e não só no §4.** `slots.json` marca B10 como `dono: par` e `condicional`. O inventário do curso inglês é construído sobre **falsos amigos do inglês**, e a maior parte deles **não é falso amigo para um alemão**:

| item do B10 inglês | vale para o alemão? |
|---|---|
| `SALIDA` ≠ "sale" | **NÃO.** Nada em alemão sugere liquidação. É vocabulário, não armadilha |
| `SALIDAS` = departures | **SIM**, mas sem o contraste que dava graça ao item |
| `TIRAR`/`EMPUJAR` | **SIM, e é o melhor item do slot nos dois pares** — `TIRAR` continua sendo a porta que todo mundo empurra |
| `embarazada` = grávida | **NÃO existe.** Não há `embarrassiert` em alemão. **O item mais citado do curso inglês some** |
| `la carta` × `el menú` | **QUASE SOME.** `Karte` alemão **é** cardápio (`Speisekarte`) e `Menü` alemão **é** refeição fechada. **Os dois batem certo.** O que sobra é o `menú del día` = `Tagesmenü`, que também bate |
| `constipado` = resfriado | **SIM, e continua perigoso** — `konstipiert` existe em alemão médico. **Mantido, e mora em B17** |
| `PLANTA BAJA`, `ASEOS`, `SOLO EFECTIVO`, `COCINA CERRADA`, `S.M.`, `AGUA NO POTABLE`, `FARMACIA DE GUARDIA`, `CERRADO POR VACACIONES`, `ZBE`, `HOJAS DE RECLAMACIONES` | **SIM, todos** — são convenção espanhola, `dono: destino`, e portam intactos |

**Candidatos alemães a investigar e confirmar antes de virar áudio (NÃO CONFERIDO — precisa de revisor):** `firma` = assinatura ≠ `Firma` empresa (aparece no balcão da locadora e no check-in, cena de B05/B07) · `regalos` ≠ `Regale` (prateleiras) — cena de B15 · `salado` = salgado ≠ `Salat` — cena de B12 · `mantel` = toalha de mesa ≠ `Mantel` (casaco) · `discutir` = brigar ≠ `diskutieren` — cena de A04, e o mal-entendido ali é social, não operacional.

**E o item que só existe neste SKU:** **os artigos `es`/`sa` do mallorquim** nos topônimos que o comprador alemão lê todo dia — `Sa Coma`, `Es Trenc`, `Ses Illetes`, `Sa Pobla`, `Es Pla`. Não é `el`/`la` errado: é **outra língua com outro artigo**, e o aluno que não sabe disso passa duas semanas achando que está lendo espanhol mal escrito. Custo ~40 s, retorno alto, e é 100% receptivo — exatamente o que B10 pede. Amarra em A05 (§4.3).

**Consequência:** **B10 não é reescrita. É NOVA.** Isso muda a linha de orçamento do slot de "reescrita" para "parte nova" (§5).

---

## 2. O ROSTER DE MOLDES SE RE-DERIVA

**LEI (`PRODUTO` §3.2 regra 5, §7, e `moldes.json` → `_regras.ativo_de_par`):** *"O núcleo gerador vive inteiro em ME VIRO, que é específico do PAR. Ele NÃO se amortiza entre compradores: o que é forma fechada para um brasileiro não é para um anglófono. A cada comprador novo o roster se RE-DERIVA, não se traduz."*

O critério de admissão **não muda** — P1 (mundo, não sistema), P2 (alcance cruzado), P3 (degrada com elegância), P4/P5 (forma e recall). **O que muda é o preço de cada molde**, e preço muda ranking, quantidade de encaixes e tempo de ensino.

### 2.1 A pergunta que o briefing faz primeiro: `Quería` continua sendo o nº 1?

**Não. E a razão pela qual ele era o nº 1 desaparece — mas ele não sai do roster.**

`moldes.json` → `QUERIA.porque_o_numero_1` diz, textualmente: *"É o único da lista que NÃO codifica interlocutor. `¿Me pones?` vs `¿Me pone?` obriga a decidir tú/usted sob estresse — exatamente a decisão que o anglófono toma ao contrário."*

O anglófono **não tem a máquina**: o inglês perdeu o T/V no século XVII e ele decide no escuro. `Quería` é uma **muleta** para uma habilidade ausente.

**O alemão tem a máquina rodando desde criança.** `Sie`/`du` é uma decisão que ele toma dezenas de vezes por dia, com custo social real, sem esforço consciente. **Mas — e é aqui que a derivação preguiçosa erra — a máquina dele está calibrada para a Alemanha, e a calibragem está errada para a Espanha.**

- Em alemão, `Sie` é o **default** com qualquer adulto desconhecido, incluindo garçom, balconista e recepcionista, e a transição para `du` é um evento marcado.
- Na Espanha, `tú` é o default em bar, loja e balcão — a `GRADE` do EN já registra isso em B02 (*"`tú` é o default na Espanha"*). `Usted` com um garçom jovem lê como distância deliberada, formalidade de repartição pública, ou ironia.

> **O anglófono decide no escuro. O alemão decide com confiança, e decide errado.**
> Errar por acaso produz uma frase estranha. Errar por convicção produz **frieza consistente durante doze dias**, porque ele nunca vai desconfiar da própria escolha.

**As três consequências, e elas são o miolo desta seção:**

1. **`QUERIA` é REBAIXADO de nº 1 para ~nº 3, e o argumento de venda dele muda.** Ele continua no roster — passa em P1, P2 e P3 com folga, abre bilheteria, recepção, farmácia, padaria, loja, locadora e comisaría, e continua sendo *"menos sílabas e soa local"*. **O que sai é a frase "ele te salva da decisão tú/usted"**, que para este comprador não é um benefício: é uma decisão que ele **quer** tomar e que precisa aprender a tomar certo. Vender `Quería` como fuga da decisão seria vender uma muleta a quem tem a perna boa — e pior, deixaria a calibragem errada intacta.

2. **`ME-PONE` é PROMOVIDO a nº 1 ou nº 2.** O par `¿me pone?` / `¿me pones?` é exatamente o slot cognitivo `Sie`/`du`, que ele já roda. O que no curso inglês é um **custo** (obriga a decidir) aqui é uma **alavanca**: é o lugar mais barato do curso inteiro para instalar a calibragem certa, porque o aluno não precisa aprender o mecanismo — só o **ajuste**. O molde ganha encaixes e um bloco de ensino um pouco maior; a permissão `Ponme` de I02 sobe de nota de rodapé a item.

3. **Nasce um item de conteúdo que o curso inglês não tem, e ele NÃO é um molde:** a **recalibragem `Sie`≠`usted` / `du`≠`tú`**. Ela falha em P1 (o buraco seria preenchido por uma decisão do sistema, não por coisa do mundo) e em P4. **É PEDÁGIO? Também não** — o teste do pedágio é *"sem ele a frase é indizível ou sai rude"*, e a `GRADE` EN §3 já provou que no espanhol turístico esse acabamento não existe: `Quería…`, `¿Hay…?`, `Sin hielo, por favor` são todas dizíveis sem decidir nada. **Portanto: continua NÃO ativando a extensão X-POLIDEZ, e zero extensões seguem valendo — 36 partes exatas.** A recalibragem entra como **beat declarado em B02 e como o eixo de I02**, com a mesma arquitetura que o curso inglês usa para a hiper-polidez britânica, e com conteúdo oposto.

### 2.2 Molde a molde — o veredito

| molde | forma | preço para o alemão | veredito |
|---|---|---|---|
| **QUERIA** | `Quería + [subst.]` | **médio.** Sem equivalente estrutural direto (`Ich hätte gern` é mais longo e mais marcado) | **FICA. REBAIXADO** de nº 1. Argumento novo: brevidade e registro local, não fuga de decisão |
| **PUEDO** | `¿Puedo + [inf]?` | **BARATO.** `Kann ich…?` / `Darf ich…?` — estrutura idêntica | **FICA, SOBE.** Ganha encaixes. **Uma dispensa nova e obrigatória:** o alemão separa `können` (conseguir) de `dürfen` (ter licença) e vai procurar o segundo. *"`Puedo` cobre os dois. Você não escolhe."* Uma linha, dita em voz alta — é `PRODUTO` §5.4, contorno declarado |
| **HAY** | `¿Hay + [X]?` | **BARATO na estrutura, CARO na letra.** `Gibt es…?` é traço a traço o mesmo molde, e é altíssima frequência em alemão. **Mas `hay` começa com o ⟨h⟩ mudo** (§1.2 linha 6) | **FICA, SOBE.** Provavelmente o molde mais barato do SKU. **A regra de leitura do ⟨h⟩ mora aqui**, grudada ao molde nº 1 de frequência — melhor lugar impossível. Segue sendo o contorno canônico do subjuntivo |
| **ME-PONE** | `¿Me pone/pones + [X]?` | **BARATO no mecanismo, e é a alavanca da §2.1** | **FICA. PROMOVIDO a nº 1/nº 2.** Ganha encaixes e o bloco da recalibragem |
| **SIN-CON-PARA** | `sin / con / para + [X]` | **O MAIS BARATO DO ROSTER.** `ohne` / `mit` / `für`; e **`para llevar` = `zum Mitnehmen`** um-a-um, expressão que o alemão usa toda semana | **FICA, e continua sendo o melhor retorno por unidade ensinada.** ⚠️ **Perde o encaixe mais valioso**: `sin conversión` **não existe para este comprador** (§3.3, DCC). A lista de encaixes se re-escreve sem ele |
| **LLEVA** | `¿Lleva + [ingrediente]?` | **BARATO.** `Ist da X drin?` / `Enthält es…?`, e a literacia alemã de rótulo e alérgeno é alta | **FICA.** Mesma casa, B13. Nota de leitura: `jamón` é onde a regra do ⟨j⟩ (§1.2 linha 4) mais custa se errar, porque é frase de alergia |
| **DONDE** | `¿Dónde está + [el X]?` × `¿Dónde hay + [un X]?` | **BARATO, e o par vem de graça.** O alemão já opõe `Wo ist der/die/das…?` a `Wo gibt es hier ein/eine…?` — o contraste definido × qualquer **é nativo** | **FICA.** ⚠️ **O tempo de ensino do PAR colapsa** — e vai para onde o próprio roster admite estar o problema real: *"o problema desta cena é a RESPOSTA, não a pergunta"*. B08 gasta o tempo liberado na escotilha (`¿Está lejos?`, `¿Me lo escribe?`, o dedo) e em escuta |
| **ME-PUEDE** | `¿Me puede + [inf]?` | **BARATO.** `Können Sie mir…?`; `¿Me lo escribe?` = `Schreiben Sie es mir auf?` | **FICA.** Continua sendo a heroína do kit anti-pânico |
| **OTRA** | `Otra/Otro + [X]` | **O MAIS BARATO junto com SIN-CON-PARA.** `Noch ein Bier, bitte` é **a** frase de balcão alemã | **FICA, SOBE.** E ver §2.3, item de gênero |
| **YA-ESTA** | `Ya está + [pagado…]` | **BARATO.** `Das ist schon bezahlt` — `schon` = `ya`, particípio no mesmo lugar | **FICA.** Fechado continua sendo a feature |
| **SOY-ESTOY** | `Soy/Estoy + [lista de 6]` | **IGUAL ao inglês no eixo ser/estar** — o alemão também só tem `sein`, e o contraste é igualmente opaco. **MAIS BARATO em duas outras coisas:** `Ich bin Vegetarier` **não leva artigo**, igual a `Soy vegetariano` (o anglófono é empurrado para `soy **un** vegetariano` pelo `I am **a** vegetarian`); e o predicado nominal sem artigo é natural | **FICA, FECHADO** (a lista é a feature, `PRODUTO` §5.4: contraste de sistema nunca se contrasta). **Uma armadilha nova e nomeada:** `allergisch **gegen**` → o aluno produz `alérgico **contra**`. O certo é `alérgico **a**`. Grudar a preposição na frase-martelo e nunca ensinar "regência" |
| **ME-HE-DEJADO** | `Me he dejado + [X] + [lugar]` | **BARATO, e é a maior surpresa gramatical do par.** O alemão fala o passado no **perfeito composto com `haben`** (`Ich habe … liegen lassen`), que é o mesmo desenho do `he dejado` peninsular. Onde o inglês **força** um passado simples, o alemão já está na forma certa | **FICA**, casa em B07 (a mudança de casa do EN vale igual: casa em B18 dá zero redisparos). **O bloco de "gramática em foco" encolhe para uma linha** |
| **APRECIACION** (social) | `[isto] estaba + [adj forte]` · `¡Qué + [adj]!` | **estrutura barata, REGISTRO caro.** O `-ísimo` não tem equivalente morfológico; a resposta alemã de elogio à comida é mais contida | **FICA, casa I07.** **O enquadramento inverte:** o britânico não tinha as palavras; o alemão vai ter as palavras e achar que está exagerando. **O que a parte entrega não é vocabulário, é PERMISSÃO** (`PRODUTO` §5.3: *"permissão não é enfeite"*) — *"aqui isto não é exagero; é o volume normal do elogio, e abaixo dele o elogio não é ouvido."* |
| **ELECCION** (social) | `¿Cuál me recomienda: [A] o [B]?` | **BARATO.** `Was empfehlen Sie: A oder B?` | **FICA, casa I03.** Sem mudança |
| **PREFERENCIA** (social) | `Me gusta + [X]` · `Prefiero + [X]` | **BRINDE, e é a maior economia isolada do roster.** A inversão de `gustar` — o obstáculo mais notório do anglófono — **é nativa do alemão**: `Mir gefällt das`, `Das Essen schmeckt mir`, experienciador no dativo, coisa como sujeito | **FICA, casa I05, e fica MAIS ABERTO.** O `moldes.json` EN manda *"nunca se explica a inversão do sujeito, e a palavra 'verbo' não aparece no áudio"* — a proibição do jargão **continua valendo** (kill-switch de redação, `PRODUTO` §5.1), mas a **âncora na língua do aluno é legítima e resolve em cinco palavras**: *"funciona como `gefallen`."* Isso é o INV-7 aplicado (abstração vira coisa da L1), não gramática. **O tempo liberado permite mais encaixes** |

### 2.3 A lista do que muda — a entrega pedida

**Não reescrevi o roster. Estas são as edições a fazer em `curso-espanha-de/src/lib/course/moldes.json` (arquivo que ainda NÃO existe — FATO, conferido em disco):**

1. **Ordem:** `ME-PONE` sobe para nº 1 ou nº 2; `QUERIA` desce para ~nº 3. **Motivo:** o `porque_o_numero_1` de `QUERIA` é um argumento sobre a L1 do comprador, e a L1 mudou.
2. **`QUERIA.porque_o_numero_1`:** reescrever inteiro. Sai *"não codifica interlocutor"*; entra brevidade + registro local. **Não traduzir a frase antiga.**
3. **`ME-PONE`:** ganha a recalibragem `Sie`≠`usted` como nota de ensino e mais encaixes; a permissão `Ponme` de I02 sobe de nota a item declarado.
4. **`SIN-CON-PARA.exemplos`:** **remover `sin conversión`** e repor com encaixe de peso equivalente. É a única remoção obrigatória de encaixe do roster, e ela vem do §3.3 (DCC).
5. **`PUEDO`:** acrescentar a dispensa `können`/`dürfen` como nota; ganha encaixes.
6. **`HAY`:** ganha a regra do ⟨h⟩ mudo como nota de par; ganha encaixes.
7. **`DONDE`:** anotar que o par definido × qualquer é **nativo**, e que o tempo de B08 se redistribui para a escotilha e para a escuta. **A casa continua B08** — não mover.
8. **`SOY-ESTOY`:** acrescentar a armadilha `alérgico **a**` ≠ `allergisch **gegen**`; anotar o brinde do predicado sem artigo. **Continua FECHADO.**
9. **`PREFERENCIA`:** anotar a âncora `gefallen`; abrir mais encaixes.
10. **`APRECIACION`:** anotar que o problema é registro, não vocabulário, e que a parte entrega permissão.
11. **`ME-HE-DEJADO`:** anotar o brinde do perfeito com `haben`; casa em **B07** (herdar a decisão do EN, que é estrutural e não linguística).
12. **`cortados`:** `Me gustaría` **continua cortado**, e o motivo **muda**: no EN é *"o acolchoamento que deixa o britânico sem ser servido"*. Para o alemão o acolchoamento não é o problema — corta-se porque é mais longo e mais marcado que `quería`, e porque `Ich hätte gern` já traduz mal. **Reescrever o campo `porque`; não copiar.** `GRAU` e `subjuntivo em subordinada` seguem cortados pelos mesmos motivos, que são do destino e da língua-alvo.
13. **`ensinados_mas_nao_declarados`:** a lista dos cinco (`[X] no funciona`, `Me han robado`, `Voy a`, `¿Nos vemos…?`, `¿Tengo que?`) **porta inteira** — os motivos são de teto e de cena, não de L1. **Mas `¿Tengo que + [inf]?` fica mais barato** (`Muss ich…?`), o que é argumento para reabrir o teto **só se o G9 medido ficar abaixo do piso, com o dado na mão** — nunca por antecipação (`moldes.json` → `_regras.teto`).
14. **Teto:** **12 operacionais + 3 sociais = 15.** Não mexe. O teto é orçamentário e o orçamento é o mesmo.
15. **Nenhum molde entra e nenhum sai.** Os doze operacionais e os três sociais do EN sobrevivem à re-derivação. **Isto é um resultado, não uma preguiça** — e é a evidência mais forte de que a espinha do produto está certa: mudou a L1 inteira e o roster mudou de **preço e de ordem**, não de composição.

### 2.4 Duas consequências de método, que valem para todo SKU futuro

- **A pergunta certa não é "o alemão tem esta estrutura?" — é "o alemão tem esta estrutura e ela aponta para o mesmo lugar?".** `Sie`/`du` existe e aponta para o lugar errado. Essa é a categoria mais perigosa da derivação: **estrutura presente e mal calibrada custa mais caro que estrutura ausente**, porque o aluno não desconfia.
- **Onde a L1 tem a estrutura, o molde fica barato — e "barato" gasta-se em encaixes e recalls, não em tempo devolvido.** O G9 mede **cobertura**, não economia. Um molde barato que continua com três encaixes é orçamento jogado fora.

---

## 3. O DELTA CULTURAL

> **Aviso, e é o mais importante deste documento.** `PRODUTO` §5.3 e o portão **G6** proíbem **adjetivo de povo**: gentílico + cópula = **0 ocorrências**. *"Os alemães são pontuais"* não é uma frase levemente errada — é a categoria de frase que o produto existe para não escrever, e **é aqui que o G6 mata**. Tudo abaixo é **comportamento com consequência**, na Ficha de 6 Campos, e **todo item traz onde a regra não vale**. Onde eu não tenho o campo 6, o item está marcado como incompleto e **não pode ir ao áudio**.

### 3.1 Quem é este comprador (FATO, com fonte)

| medida | valor | fonte |
|---|---|---|
| chegadas alemãs à Espanha, 2025 | **11.939.029** (3º mercado emissor) | INE / Frontur, fechamento 2025 |
| chegadas britânicas, 2025 (comparação) | **>19 milhões**, 1º mercado | INE / Frontur, já em `pesquisa-espanha.md` §8.6 |
| destino, por comunidade | **Baleares 42% · Canárias 22% · Cataluña 13%** | Turespaña, ficha executiva Alemanha (dados 2024) |
| destino britânico, comparação | **Canárias 27% · Baleares 18,3–24,9%** | `pesquisa-espanha.md` §8.6 |
| alemães nas Baleares, 2025 | **4.927.029** = **26%** das chegadas internacionais ao arquipélago; **>90% vão a Mallorca**; ~**4,57 M** em Mallorca ≈ **34%** dos turistas da ilha | imprensa citando AETIB ⚠️ **fonte secundária — reconferir em AETIB/IBESTAT antes de virar áudio** |
| estadia média | **7,9 noites** | Turespaña / INE, 2024 |
| alojamento | **hotel ~68–69%** | idem |
| motivo | **lazer ~89–90%** | idem |
| perfil | idade média **42,7**; **73%** ensino superior; viaja **em casal 33%**, **em família 24%** | idem |
| compra de imóvel | alemães = **2ª nacionalidade** compradora estrangeira, **6,67%** das compras de estrangeiros no 4T/2025 (atrás dos britânicos, 8,57%) | Consejo General del Notariado, via idealista |
| alemães empadronados nas Baleares | **18.222** (padrão municipal 2022) | INE/padrón ⚠️ **sub-registra fortemente** — residência não declarada é comum; usar como **piso**, nunca como estimativa |
| proficiência em inglês | **Alemanha 4º lugar, 615, faixa "muito alta"** · **Espanha 36º, 540, faixa "moderada"** | EF EPI 2025 |
| férias escolares de verão | **escalonadas entre 29/jun e 03/ago (2026)** — 5 semanas de dispersão, rodízio de 5 grupos de estados; **Baviera e Baden-Württemberg fixos**, do começo de agosto a meados de setembro | Kultusministerkonferenz (Abkommen de Hamburgo, 1964) |
| pagamento em espécie na Alemanha | **45% de todas as transações** em 2025 (−6 p.p. vs. 2023) | Deutsche Bundesbank, *Zahlungsverhalten in Deutschland 2025* |

**A leitura de produto, em quatro linhas (INFERÊNCIA declarada sobre os FATOS acima):**

1. **É um comprador de arquipélago, e de UM arquipélago.** 42% Baleares, e a Mallorca dentro disso. O britânico está espalhado entre Canárias, Baleares, Costa del Sol e city break; o alemão está concentrado. **Isso muda o que "a Espanha" significa em cada cena.**
2. **Ele fica quase 8 noites e volta.** Não confirmei taxa de repetição em fonte primária (**NÃO CONFERIDO**), mas a combinação de estadia longa, concentração num destino e a 2ª posição em compra de imóvel sustenta a leitura de **relação continuada com um lugar**, não de visita única. **Isso favorece I05, I08 e A08** — as partes de "ser convidado de novo" — e desfavorece o enquadramento de "primeira vez" que o Básico britânico usa.
3. **A sazonalidade dele não é a britânica, e o mecanismo de contagem regressiva de M1 depende disso.** O britânico tem uma janela nacional (20/jul–31/ago). O alemão tem **cinco semanas de dispersão por rodízio de estados**, mais a Baviera fixa em agosto–setembro. **Consequência dura: a copy de prazo de M1 não pode citar "as férias de verão" como uma data.** O onboarding já pede a data do voo (`PRODUTO` §apêndice) — aqui ele deixa de ser conveniência e vira **necessidade**, como o `pesquisa-espanha.md` §8.6 já concluiu para o par anterior por outro caminho.
4. **A Baviera é o caso de borda que merece uma linha própria:** férias fixas do começo de agosto a meados de setembro colide **exatamente** com o `CERRADO POR VACACIONES` de agosto (A06) e com o calor extremo (`pesquisa-espanha.md` §8.5, junho de 2026: 3,3 °C acima da referência, >1.000 mortes em excesso só em junho). **A parte A06 muda de peso para este comprador.**

### 3.2 O que ele JÁ SABE e o curso inglês explica do zero

**Cada item aqui é tempo que se devolve ao aluno. Não devolva ao roteiro: gaste em outra coisa.**

| o que o curso inglês ensina | por que é ensino novo para o britânico | por que já é hábito do alemão | consequência |
|---|---|---|---|
| **Cumprimentar ao ENTRAR e ao SAIR** de loja, bar, elevador (B02, e é apresentado como revelação) | não é norma britânica em loja pequena | é norma alemã forte (`Guten Tag` ao entrar na padaria, `Tschüss` ao sair) | **B02 economiza um bloco.** O item **não some** — muda de "aprenda isto" para *"você já faz isto em casa; funciona igual, e aqui **não** é opcional"*. Reconhecimento em vez de instrução, e é mais rápido |
| **A farmácia tria antes do hospital** (B17, é o miolo do slot) | o britânico vem do modelo GP/NHS e acha que farmácia é loja | é literalmente o sistema alemão: a `Apotheke` tem medicamento de tarja, aconselha e encaminha | **B17 fica mais barato.** O que ela ensina ao alemão não é o conceito, são as **palavras** |
| **`farmacia de guardia`, e a lista está na porta da farmácia fechada** (B17, apresentado como truque) | é achado genuíno para o britânico | é o `Notdienstplan`, **afixado na porta por obrigação da Apothekenbetriebsordnung, visível inclusive à noite** — e o alemão até conhece a portinhola de atendimento noturno | **Vira reconhecimento em 15 s**, não uma explicação. Ganha o campo 6: **onde não vale** — o horário e o raio do rodízio espanhol não são os alemães, e em ilha o "mais próxima" pode ser longe |
| **A fila que não é fila (`¿Quién es el último?`)** (B17) | é o choque cultural mais forte do slot para um britânico | o alemão tem `Wer ist der Nächste?` na padaria e no açougue, e senha em repartição | **Mais barato.** Mantém-se a **fala**, encurta-se a explicação |
| **Notação de preço `1.234,56`** | o britânico usa a pontuação invertida e precisa de aviso | **idêntica em alemão** | **Corta o aviso inteiro** de B09/B14 |
| **Gorjeta: arredondar** (I10, e o curso inglês gasta a parte inteira desmontando o reflexo de 15–20%) | o britânico traz o reflexo de 10%+ e o americano o de 20% | o `Trinkgeld` alemão é arredondar / ~5–10%, e paga-se dizendo o total ao garçom | **I10 perde o seu conflito principal.** Ver §3.3 para o que entra no lugar |
| **Relógio de 24 h** | o britânico usa 12 h | padrão na Alemanha | corta um aviso de B09 |
| **Gênero gramatical existe** (`PRODUTO` §5.4) | é um conceito estrangeiro para o anglófono | o alemão tem **três** gêneros e concorda sem pensar | **A dispensa continua, o enquadramento inverte.** Não é *"você não tem isto, ignore"* — é *"você tem, e está mal ajustado: `die Sonne` é `el sol`, `der Mond` é `la luna`, `das Bier` é `la cerveza`. **Cole o artigo na palavra e não traduza o seu.**"* Sem essa linha, o alemão traduz o gênero alemão e erra **com método**, que é pior que errar ao acaso |
| **O ferramental de passado recente** (`me he dejado`, `me han robado`, `ya está pagado` — B07/B14/B17/B18) | o inglês obriga passado simples e o britânico estranha o perfeito peninsular | o alemão falado usa o perfeito composto quase sempre; o desenho é o mesmo | o bloco de "gramática em foco" desses slots encolhe para uma linha |
| **A inversão de `gustar`** (I05) | é o obstáculo clássico do anglófono | `gefallen`/`schmecken` fazem exatamente isto | §2.2 |

### 3.3 O que ele NÃO sabe e o curso inglês nem MENCIONA

**Estes são os itens que só existem neste SKU. Nenhum deles está em nenhum documento do par EN.**

1. **O DCC não existe para ele — e isso arranca o coração de B14.**
   A `GRADE` EN chama `ep-e05a` de *"the part that pays for the app"* e a preserva **intacta**: markup de 10–13%, o exemplo dos €80 em €600, a escada `En euros, por favor` → `Sin conversión`, e a regra de bolso *"a opção na SUA moeda é a errada"*.
   **A conversão dinâmica de moeda só existe quando a moeda do cartão difere da moeda da transação. O comprador alemão paga em euros com cartão em euros. A maquininha não vai oferecer nada.**
   **Consequência dura, e é a segunda maior deste documento:** B14 deixa de ser enxerto de base intacta e vira **reescrita total**; `sin conversión` sai dos encaixes de `SIN-CON-PARA` (§2.3); e o slot precisa de um novo item que **de fato** economize dinheiro para justificar a promessa "pagar sem pagar a mais". Os candidatos, todos já no acervo de destino:
   - **o suplemento de terraza e o cartaz de preços obrigatório** (`GRADE` EN, B11) — dinheiro real, cena diária;
   - **a sobretaxa do caixa eletrônico independente (Euronet) contra o caixa de banco de rua** — sobrevive inteira e **sobe de peso**, porque este comprador saca e paga em espécie mais do que o britânico (Bundesbank: 45% em espécie na Alemanha em 2025) e vai encontrar essa taxa mais vezes;
   - **a `hoja de reclamaciones`** — sobrevive e **fica mais forte** (item 2 abaixo).
2. **Ele tem um canal de reclamação que o britânico perdeu, e o curso inglês não podia mencioná-lo.**
   `pesquisa-espanha.md` já registra o achado e o par EN não podia usá-lo: *"o consumidor alemão, francês ou italiano lesado na Espanha aciona [o canal intra-UE]"* — a rede de Centros Europeus do Consumidor. Para o alemão, a escada de escalada do INV-13 ganha **um degrau real depois** da `hoja de reclamaciones`: o litígio de consumo transfronteiriço dentro da UE. **Isso é moldura de poder, não de perda** — exatamente o que o `PRODUTO` §10 anti-padrão 3 pede.
3. **Ele é cidadão da UE, e dois slots inteiros do Básico perdem o conteúdo.** Ver §4.1 — é a maior consequência estrutural do SKU.
4. **A inversão dos numerais.** O alemão diz `einunddreißig` (um-e-trinta); o espanhol diz `treinta y uno` (trinta-e-um). Os números entram em B09 e B14 pelo **lado receptivo** (ouvir o preço) e é exatamente aí que o hábito morde: **o aluno ouve `treinta y cuatro` e anota 43.** O britânico não tem esse risco — a ordem inglesa bate com a espanhola. **É armadilha receptiva 100% deste par**, e ela mora onde o dinheiro está.
5. **`halb zehn` não é `las diez y media`.** O alemão conta a meia hora **para a frente** (`halb zehn` = 9h30); o espanhol conta **para trás** (`las nueve y media` = 9h30). O aluno que traduz peça a peça erra **uma hora inteira** — e erra na parte que o produto mais promete, **I01, o relógio deles**, cuja decisão declarada é *"a que horas eu janto"*. Item receptivo, alto valor, custo baixo.
6. **A distância de horário de jantar é MAIOR para ele, não menor.** O jantar alemão típico é mais cedo que o britânico. Um aluno que janta às 18h30 em casa e chega a um país cuja `cena` começa às 21h tem **duas horas e meia** de defasagem, não uma e meia. **I01 sobe de peso neste SKU** — e continua sendo a parte mais upbeat do curso, com o mesmo contraexemplo obrigatório (*o jantar é elástico; o trem, o museu e a consulta não são*).
7. **`¡Salud!` ≠ `Prost`, e não é o brinde que muda — é o olho.** No protocolo de brinde alemão, olhar nos olhos ao tinir é regra explícita e comentada. Na Espanha o brinde é mais solto. **Item de I08, receptivo, baixo custo. ⚠️ o campo 6 (onde não vale) ainda não está fechado — não vai ao áudio sem ele.**
8. **Pagar separado.** Ver §3.4, item 3 — é a maior fricção operacional do par.

### 3.4 Atrito social — comportamento com consequência

**Cinco itens. Cada um com sinal observável, ação, ganho e onde a regra não vale.**

**1. A hora marcada não é uma coisa só, e o erro do aluno é aplicar a mesma régua às duas.**
*SINAL:* você chega às 21h em ponto num restaurante com reserva para 21h e o salão está com três mesas ocupadas; e você chega às 21h em ponto numa casa para a qual foi convidado às 21h e o anfitrião ainda está no chuveiro.
*O QUE É ALI:* dois relógios diferentes. Reserva de restaurante, hora do trem, sessão de museu, consulta médica e visita guiada correm **no minuto**. Encontro privado — casa, praça, "quedamos a las nueve" — tem uma folga que ninguém anuncia.
*O QUE VOCÊ FAZ:* no comercial e no institucional, chegue na hora. No privado, **chegue 15–20 minutos depois e não peça desculpa** — não há por que.
*O QUE MELHORA (ganho):* você para de ser a pessoa que espera sozinha na sala e passa a chegar junto com a festa.
*ONDE NÃO VALE:* **a Renfe fecha o portão** (`GRADE` EN, B09), o museu com hora marcada não deixa entrar depois, e a consulta médica perdida é perdida. E há casas onde o combinado é ao minuto.
**Redação:** o verbo-mestre é **notar**, não evitar. Nenhuma frase deste bloco pode começar com um gentílico.
**Enquadramento deste par:** o britânico precisa do **aviso** ("o jantar é mais tarde do que você pensa"); este comprador precisa da **permissão** ("aqui você pode chegar depois, e é o certo"). É o INV-11 pagando: *briefing só de proibição produz turista paralisado.*

**2. O balcão premia quem já sabe pedir — e este aluno já sabe metade.**
*SINAL:* você pediu de forma curta e direta, sem preâmbulo, e foi servido em nove segundos.
*O QUE É ALI:* `Ponme una caña` não é grosseiro na Espanha; é normal (`GRADE` EN, I02). O pedido curto e direto do balcão alemão (`Ein Bier, bitte`) **já tem a forma certa**.
*O QUE VOCÊ FAZ:* **não** acrescente acolchoamento por medo de soar rude; **troque o `usted` pelo `tú`** e suba o volume.
*O QUE MELHORA:* servido mais rápido e tratado melhor.
*ESPELHO (trava C, obrigatório):* manter `usted` com um garçom de 25 anos durante doze dias não é respeito ali — lê como distância deliberada, e ele vai responder na mesma moeda.
*ONDE NÃO VALE:* Guardia Civil, banco, médico, funcionário público e pessoa claramente mais velha em contexto formal — ali `usted` é o certo, e o produto não deve produzir um aluno que nunca o usa.
**Este item substitui integralmente o bloco anti-hiper-polidez do curso inglês.** O que o par EN combate ali é o **acolchoamento** — orações empilhadas antes do pedido (`I was wondering if I could possibly…`), que é a forma que o inglês de balcão dá ao pedido educado. O que este item combate é outra coisa: o **`Sie` mantido por default**, que é a forma que o alemão de balcão dá ao mesmo respeito. Mesma cena, mesmo slot, **hábito de língua diferente, remédio oposto**. **Copiar o texto do par EN aqui é o anti-padrão 9 em estado puro** — e escrever isto como traço de povo em vez de hábito de língua é o G6 (§3, aviso de abertura).

**3. Pagar separado — e é o maior atrito operacional do par.**
*SINAL:* seis pessoas na mesa, o garçom traz **uma** conta, e você começa a somar o que cada um consumiu.
*O QUE É ALI:* o cálculo item a item por pessoa é uma prática corrente na Alemanha, ao ponto de a imprensa alemã tratá-la como controvérsia doméstica e de haver casa que afixa `Getrennt zahlen verboten!`. Na Espanha o default é `a partes iguales`, e a conta individualizada é pedido incomum, não impossível.
*O QUE VOCÊ FAZ:* decida **antes** de fechar a conta e diga uma frase só — `¿Podemos pagar por separado?` **ao pedir a conta**, nunca depois de ela chegar. Se não decidiram, `Pagamos a partes iguales`.
*O QUE MELHORA:* a mesa não trava dez minutos no fim da noite, e a `sobremesa` — que é o presente do sistema espanhol (`GRADE` EN, I01) — não é gasta em aritmética.
*ONDE NÃO VALE:* em bar de balcão frequentemente não há conta nenhuma até o fim, e paga-se por rodada com `invita` alternado (`GRADE` EN, I04) — pedir separado ali é resolver um problema que não existe.
*⚠️ RESSALVA DE FONTE:* a assimetria é bem documentada na imprensa e no comentário de costumes alemão; **não achei fonte quantitativa**. Rotular **CONSENSO**, nunca *"estudos mostram"* — mesma disciplina que a `GRADE` EN aplicou aos `dos besos`.

**4. Espécie e cartão, com a expectativa invertida.**
*SINAL:* você separou dinheiro para o dia e três dos quatro lugares preferem o cartão.
*O QUE É ALI:* em 2025 a espécie ainda respondia por **45%** das transações na Alemanha (Bundesbank); na Espanha o cartão e o contactless são rotina em transporte e balcão (`pesquisa-espanha.md`). A surpresa deste comprador é para **o lado oposto** da do britânico.
*O QUE VOCÊ FAZ:* leve espécie pouca e saque **poucas vezes e mais alto**, no caixa de **banco de rua** — nunca no caixa independente de saguão; e diga `Voy a pagar con tarjeta` **antes** de a maquininha aparecer.
*O QUE MELHORA:* você deixa de pagar sobretaxa de saque duas vezes por semana.
*ONDE NÃO VALE:* `SOLO EFECTIVO` existe e é comum em bar de bairro, mercado e taxista de rua; e a nota de 50 trava o bar pequeno (`GRADE` EN, B15).

**5. A rua de Palma e da Playa de Palma é a rua deste comprador.**
*SINAL:* você atravessa duas quadras desde a areia sem camiseta e todo mundo à sua volta está vestido.
*O QUE É ALI:* Palma multa banho/sem camisa **em toda a cidade** exceto praia e passeio marítimo, **€100–200** (`pesquisa-espanha.md`, FATO). E o decreto balear de "turismo de excessos" nomeia **Playa de Palma, Magaluf, Sant Antoni e Ibiza**: beber fora de área autorizada **€500–1.500**, venda de álcool proibida das 21:30 às 08:00, `balconing` proibido em todas as Baleares.
*O QUE VOCÊ FAZ:* camiseta ao sair da areia, sempre; a lata fica no bar.
*O QUE MELHORA:* você anda pela cidade sem ser a única pessoa que a prefeitura está olhando.
*ONDE NÃO VALE:* o passeio marítimo e a praia estão fora da regra; e a tolerância de agosto em Benidorm é outra (mas Benidorm não é o destino deste comprador).
**Por que este item muda de peso e não de conteúdo:** ele já está na `GRADE` EN em I09. **A diferença é que 42% deste comprador desembarca exatamente na jurisdição que escreveu as duas normas.** É reponderação com dado, não conteúdo novo — e é o oposto de um estereótipo: a regra é do município, não do turista.

### 3.5 A ressalva comercial honesta, e ela precisa estar escrita

**FATO:** EF EPI 2025 põe a Alemanha em 4º (615, "muito alta") e a Espanha em 36º (540, "moderada"). **FATO (⚠️ fontes comerciais/portais, NÃO CONFERIDO em fonte primária):** Mallorca tem uma rede consolidada de serviços em alemão, incluindo estimativas de **100–150 médicos de língua alemã**.

**A leitura, sem maquiagem:** em Mallorca este comprador tem **dois** idiomas de fuga — inglês (que ele fala melhor que o interlocutor espanhol médio) e, em muitas cenas, o **próprio alemão**. O britânico tem um só, e ele é o que a Espanha fala em nível moderado.

**Três consequências, e nenhuma delas é "não faça o SKU":**

1. **A promessa não pode ser "sem isto você não se vira".** Em Playa de Palma ele se vira. A promessa é a do produto: **`Isto torna a viagem mais proveitosa?`** — e a resposta continua sim, porque o que a rede em alemão entrega é o **circuito turístico**, e o que o curso entrega é sair dele. É a promessa de M2 e M3 ao pé da letra: *comer onde eles comem, na hora que eles comem, pelo preço que eles pagam.*
2. **O peso do produto desloca-se de M1 para M2/M3.** Para o britânico, M1 é sobrevivência. Para este comprador, em Mallorca, M1 é **eficiência e acesso**; o valor diferencial está em APROVEITO e LEIO A SALA. **Isso não muda a espinha** (18+10+8 é LEI), mas muda a **copy de loja** e a ordem dos argumentos.
3. **A escada de reparo de B03 ganha um degrau que o curso inglês não tem, e ele é ambíguo.** Perguntar *"¿Hay alguien que hable alemán?"* funciona em Mallorca e falha em Sevilha. **Recomendação (ORIENTAÇÃO):** ensinar `¿Hay alguien que hable inglés?` como o degrau universal — já existe no acervo, com molde `HAY` declarado (`moldes.json` v6) — e tratar o alemão como **fato local de Mallorca**, dito uma vez em I09/A05, nunca como estratégia do Básico. Instalar a fuga para o alemão dentro do kit anti-pânico é ensinar o aluno a não usar o curso.

---

## 4. OS SLOTS AFETADOS

**A espinha é LEI: 36 slots, mesma ordem, mesmas funções, nenhum excluído, nenhum renomeado, nenhum reordenado.** `slots.json` v2.1.0 não muda uma vírgula. **Zero extensões** — X-POLIDEZ segue não ativando (§2.1). **36 partes exatas.** O que muda é o recheio, e abaixo está quanto.

Escala: **TOTAL** = re-derivação, o conteúdo do par EN não serve · **GRANDE** = mais da metade muda · **MÉDIA** = um bloco entra ou sai · **PEQUENA** = ajustes e notas · **NENHUMA**.

### 4.1 A descoberta estrutural: B04 e B05

**`slots.json` marca os dois como `dono: destino`, o que promete reuso entre todos os compradores daquele destino. Para este comprador a promessa falha, e falha por um motivo que o contrato não previu: o conteúdo desses dois slots não é sobre a Espanha — é sobre o estatuto jurídico do comprador diante da Espanha.**

O que morre em **B04**, integralmente: **ETIAS** · **EES e as quatro digitais** · a **regra 90/180** · a validade do passaporte (<10 anos **E** ≥3 meses) · o seguro como quase-obrigatório · **e o eSIM**, porque o roaming intra-UE tarifa como em casa. Isso é quase o slot inteiro do par EN, e é o slot que o `PRODUTO` §8 (INV-23) nomeia como o que **carrega os fatos mais perecíveis do catálogo**.

O que entra em **B04**, com prazo físico declarado (que é o que o slot exige, `PRODUTO` §3.2 regra 8):
- **o cartão EHIC** — está no verso do cartão da caixa de saúde, tem validade, e reposição tem prazo de entrega. **FATO.**
- **o seguro-viagem complementar, e o motivo exato:** a EHIC cobre tratamento na rede pública, **não cobre repatriação**, busca e salvamento nem acompanhante — e o `Auslandsreisekrankenversicherung` custa **€10–20 por ano**. **FATO (EVZ / AOK / betanet).** É o melhor item de B04 deste SKU: custo trivial, buraco real, prazo real (contratar **antes** de embarcar).
- **documento de identidade válido** e, para menor, o **documento próprio da criança** — companhia aérea recusa embarque com documento vencido.
- **AVE 60–90 dias antes** · **caução e cartão em nome do condutor** na locadora · **ecotaxa balear**, que este comprador paga mais que qualquer outro.
- ⚠️ **A ZBE para veículo de placa estrangeira é PENDÊNCIA DE PESQUISA.** O distintivo da DGT só existe para placa espanhola (`pesquisa-espanha.md`); o procedimento para veículo estrangeiro varia por município. **Não afirmar nada aqui sem fonte.**

**B05** perde ainda mais: **num voo Schengen interno não há controle de fronteira.** As três perguntas na cabine, o quiosque de `autoservicio`, a fila do EES — nada disso acontece.
**Mas o slot não some (LEI, regra 1) e a FUNÇÃO dele sobrevive intacta:** *motivo, tempo, onde você fica.* Ela apenas **muda de balcão**. Quem pergunta essas três coisas a este comprador é o **check-in do hotel** (RD 933/2021 — e o slot mantém a linha que mais desarma ansiedade: **não é golpe, é lei desde 2021, e todo hotel faz**) e o **balcão da locadora**. `pesquisa-espanha.md` e a `GRADE` EN já têm o material dos dois; ele só muda de slot.
**Bônus de coerência:** é aqui que cai o falso amigo `firma` ≠ `Firma` (§1.6), porque é literalmente onde alguém diz "assine".

**Consequência de orçamento:** B04 e B05 saem de **REUSO INTEGRAL** (custo 0 no par EN) e entram como **REESCRITA TOTAL**. Sozinhas, apagam a economia que a `GRADE` EN tinha na Onda 6.

### 4.2 A tabela dos 36

| slot | mudança | o que muda, em uma linha |
|---|---|---|
| **B01** | **TOTAL** | outra fonética inteira: 4 programas motores novos (§1.3), regras de leitura no lugar do "-o tax", distinción vira custo, `r` sobe, vogais caem |
| **B02** | **GRANDE** | o cumprimento ao entrar vira reconhecimento; entra a recalibragem `Sie`≠`usted`; entra ⟨v⟩ em `vale` e ⟨s⟩ em `gracias` |
| **B03** | **PEQUENA** | `ME-PUEDE` fica barato; a escada de reparo ganha a nota de §3.5 sobre o degrau em alemão |
| **B04** | **TOTAL** | §4.1 — perde ETIAS/EES/90-180/passaporte/eSIM; ganha EHIC + seguro de repatriação + documento |
| **B05** | **TOTAL** | §4.1 — não há fronteira Schengen; a função migra para o balcão do hotel e da locadora |
| **B06** | **MÉDIA** | eSIM sai (roaming UE); caixa de banco × independente **sobe de peso**; `¿Dónde hay un cajero?` mantém a prévia |
| **B07** | **PEQUENA** | táxi/VTC/locadora portam inteiros; casa de `ME-HE-DEJADO` fica mais barata (perfeito com `haben`) |
| **B08** | **MÉDIA** | o par `está el`×`hay un` é nativo → tempo de ensino colapsa e vai para a escotilha e a escuta; entra o ⟨h⟩ mudo de `¿Hay…?` |
| **B09** | **MÉDIA** | entra a **inversão dos numerais** (§3.3 item 4); sai o aviso de notação de preço e o de relógio de 24 h; Renfe/metrô portam |
| **B10** | **TOTAL — e vira parte NOVA** | §1.6: o inventário de falso amigo do inglês não transfere; entra o inventário alemão + os artigos `es`/`sa` de Mallorca |
| **B11** | **PEQUENA** | `OTRA` = `Noch ein` de graça; `ME-PONE` promovido chega aqui como casa |
| **B12** | **MÉDIA** | o falso amigo diário `la carta`×`el menú` **morre** (`Karte`/`Menü` batem); `sin/con/para` é o molde mais barato; `Quería` re-enquadrado; entra ⟨qu⟩ |
| **B13** | **MÉDIA** | brinde do predicado sem artigo; **armadilha `alérgico a` ≠ `allergisch gegen`**; a literacia de alérgeno é alta e o bloco explicativo encolhe. **O slot segue INTOCÁVEL** (LEI) |
| **B14** | **TOTAL** | §3.3 item 1 — **o DCC não existe**. O slot precisa de outro item que economize dinheiro; entra o canal de consumo intra-UE; sai `sin conversión` |
| **B15** | **PEQUENA** | candidato `regalos`≠`Regale`; números receptivos herdam a armadilha de B09 |
| **B16** | **PEQUENA** | estruturas quase todas baratas; ⟨ll⟩ em `la llave` |
| **B17** | **MÉDIA (para menos)** | `Apotheke`/`Notdienst`/`¿Quién es el último?` já são hábito → encurta; EHIC no lugar de GHIC; `constipado` sobrevive; golpes portam |
| **B18** | **PEQUENA** | `Me he dejado` mais barato; despedida porta inteira |
| **I01** | **MÉDIA (para mais)** | a defasagem de jantar é **maior**, não menor; entra `halb zehn` ≠ `y media`; `sobremesa` porta e fica mais valiosa |
| **I02** | **GRANDE** | mesmo slot, remédio oposto: sai o anti-acolchoamento britânico, entra o `usted`→`tú` + volume; a direção do pedido já está certa e isso se diz em voz alta |
| **I03** | **PEQUENA** | `menú del día` = `Tagesmenü` de graça; `ELECCION` porta |
| **I04** | **MÉDIA** | `getrennt zahlen` vira o item central; botellón/Playa de Palma sobem de peso |
| **I05** | **MÉDIA** | `PREFERENCIA` vira brinde (`gefallen`); as cinco perguntas mudam de recheio para um visitante que **repete** e às vezes tem casa ali |
| **I06** | **MÉDIA** | o perfeito é nativo → a explicação encolhe; **mas entra a armadilha própria deste par: `ayer` pede `fui`, não `he ido`** — e aqui o inglês estava **melhor** alinhado que o alemão |
| **I07** | **MÉDIA** | `APRECIACION` deixa de ser falta de vocabulário e vira **permissão de registro** |
| **I08** | **PEQUENA** | votos congelados portam; entra a nota do olhar no brinde (⚠️ campo 6 pendente) |
| **I09** | **GRANDE (por peso)** | Palma e Playa de Palma são a jurisdição de 42% deste comprador; os valores e anos portam intactos, o peso não |
| **I10** | **GRANDE** | o conflito britânico/americano de gorjeta **desaparece** (arredondar já é o hábito); o slot é reconstruído em torno de rachar a conta e do preço fixo |
| **A01** | **TOTAL** | §4.3 |
| **A02** | **PEQUENA** | `dono: destino`, porta |
| **A03** | **PEQUENA + pesquisa obrigatória** | porta como destino, **mas** a relação Alemanha–Espanha tem carga própria (crise do euro, "Mallorca como o 17º estado", protestos de moradia). **Não escrever nada aqui sem pesquisa e revisor** — é a parte de maior risco de G6 do produto inteiro |
| **A04** | **PEQUENA** | porta; `discutir`≠`diskutieren` é candidato de apoio |
| **A05** | **GRANDE** | §4.3 |
| **A06** | **MÉDIA** | agosto porta; entram as férias escalonadas por estado e o caso Baviera (agosto–setembro) colidindo com `CERRADO POR VACACIONES` e com o calor |
| **A07** | **PEQUENA/MÉDIA** | `dos besos` porta com a mesma disciplina de rotulagem (**CONSENSO**, nunca "estudos mostram"); `guiri` **não é insulto** e vale igual |
| **A08** | **PEQUENA** | porta; ganha peso pelo perfil de visitante que volta (§3.1 item 2) |

**Contagem, e ela fecha em 36:** **TOTAL 6** (B01, B04, B05, B10, B14, A01) · **GRANDE 5** (B02, I02, I09, I10, A05) · **MÉDIA 12** (B06, B08, B09, B12, B13, B17, I01, I04, I05, I06, I07, A06) · **PEQUENA 13** (B03, B07, B11, B15, B16, B18, I03, I08, A02, A03, A04, A07, A08). **Nenhum slot com mudança ZERO** — o que é o resultado esperado e não uma surpresa: mesmo em slot `dono: destino`, a narração é toda em alemão e a camada de molde re-deriva.

### 4.3 A01 e A05 — o ouvido muda de mapa

O par EN aponta o ouvido para a **Andaluzia** (Costa del Sol e Canárias, o destino britânico). O destino deste comprador é **Baleares 42% · Canárias 22% · Cataluña 13%**.

**A01 (ear module, `dono: par`):**
- os quatro fenômenos por frequência (`-s` aspirado, seseo, `-d-` intervocálico caído, `-r`/`-l` abrandado) **portam**, e o `-d-` continua valendo em toda a Espanha;
- o **seseo** deixa de ser curiosidade e vira **informação operacional**, porque 22% deste comprador desembarca em zona de seseo, e §1.2 linha 7 já lhe deu a permissão de produzir [s];
- **os doze moldes ouvidos em velocidade real** — o drill de maior valor por custo do curso — portam com os **mesmos audioKeys**, custo zero;
- **e o programa 3 (deslize) entra aqui**, §1.3: a fala rápida espanhola encadeia mais, e é a demonstração de que "uma palavra comprida" são três coladas;
- **restrição herdada e inegociável (`audio.config.json` do par EN, FATO lido):** Ivan e Matilda são as duas únicas vozes peninsulares da biblioteca pública, **nenhuma verificadamente regional**, e por isso **A01 não alega sotaque de região nenhuma**. Os 16 audioKeys deles vêm de graça. **Se um dia houver voz balear ou canária verificada, ela substitui aqui sem tocar em mais nada** — e para este SKU a prioridade de casting deixa de ser Sevilha e passa a ser **balear ou canária**.

**A05 (a outra língua, `dono: destino` — porta o conteúdo, muda o peso):**
- **o catalão sobe ao topo, e na variedade balear.** Não é ajuste fino: é o destino de 42% + 13% deste comprador. As palavras de cortesia (`Bon dia`, `Si us plau`, `Gràcies`, `Adéu`) e as placas (`obert/tancat`, `sortida`, `estirar/empènyer`) portam;
- entram os **artigos salats** `es`/`sa` dos topônimos (§1.6), que são a coisa que este aluno lê todo dia e que nenhum outro comprador lê;
- **e o item que a `pesquisa-espanha.md` §4.2 já tem escrito e que este SKU precisa mais que o EN:** **Canárias e boa parte da Andaluzia ocidental usam `ustedes` também no informal**. O par EN põe `vosotros` como destrava de ouvido; para 22% deste comprador **`vosotros` não é o que ele vai ouvir**. A parte tem de entregar os dois, e o onboarding já sabe o destino.

---

## 5. Custo, casting e as duas pendências que bloqueiam

**O que este SKU herda de graça (FATO, §0.1):** 752 audioKeys de fala espanhola, os 16 do ear module inclusos, e todo o acervo de pesquisa de destino.

**O que ele paga:**
1. **1.306 clipes de narração-guia em alemão** (Juli + Thomas). É a linha dominante — no par EN a narração-guia foi **85,6%** do custo do SKU. **E ela não é uma tradução dos 1.306:** seis partes são re-derivação total e cinco são grandes (§4.2), então uma fração relevante é **escrita nova**, não versão.
2. **Fala espanhola NOVA — e ela existe, ao contrário do que "reuso verbatim" sugere.** Todo item que este documento cria e que o par EN não tinha precisa de clipe espanhol se não estiver entre os 752: o par `vino`×`fino` (§1.4), os itens de encadeamento do programa 3 (`el hotel`, `una hora`, `más o menos`), os topônimos salats de B10/A05, os encaixes novos dos moldes que ficaram baratos (§2.3), e o que B04/B05/B14 pedirem depois de reescritos. **INFERÊNCIA: dezenas, não centenas.** **Confira cada frase contra o manifesto antes de escrever; não presuma.** É exatamente o anti-padrão 21 (*"esquecer uma camada inteira porque ela não está no template"*) e a linha de orçamento tem de existir mesmo que seja pequena.
3. **Componente de gesto novo** (§1.3).
4. **Quizzes** — camada barata de esquecer e cara de refazer (`PRODUTO` §5.5). O diálogo em língua-alvo reusa; **a intro da guia refaz-se inteira em alemão.**

**Duas pendências que bloqueiam a entrega, e nenhuma é de conteúdo:**

- **G14 (integridade de voz × língua) continua PENDENTE**, e este é o SKU onde o acidente já aconteceu (`PRODUTO` §apêndice: *"o SKU alemão tem mp3 em inglês sob chaves alemãs"*). **Enquanto o G14 não existir, nenhuma entrega deste SKU passa sem conferência humana de voz × língua.**
- **`moldes.json` não existe em `curso-espanha-de/src/lib/course/`** (FATO, conferido). Sem ele, `npm run briefing <slot>` não imprime nada e o G9 mede zero. **É o item nº 1 da Onda 0 deste SKU** — antes de qualquer parte ser despachada, pelo motivo escrito no `BRIEFING-AUTOR.md` do par EN: quem despacha uma onda cola a saída do comando, não uma lista digitada à mão. **Duas canônicas para a mesma informação já derrubou uma build.**

---

## 6. O que este documento NÃO decidiu

Nomeado aqui para que ninguém suponha que está resolvido:

1. **A grade dos 36 para o DE.** Este documento diz **o que muda**; a `GRADE-36-DE.md` — linha a linha, com origem, moldes e cápsula cultural por slot — é o próximo artefato.
2. **O `moldes.json` do DE.** §2.3 é a lista de edições, não o arquivo.
3. **A revisão nativa da fonética.** Tudo em §1 marcado como INFERÊNCIA fonológica precisa de um revisor que fale alemão como L1 e espanhol peninsular. **Nada disso vira áudio antes.**
4. **A carga da relação Alemanha–Espanha em A03** (§4.2). É a maior exposição ao G6 do produto e exige pesquisa própria com fonte, mais revisão humana obrigatória — como o par EN já fez para A03 e A04.
5. **A ZBE para placa estrangeira** (§4.1).
6. **O campo 6 do item do brinde** (§3.3, item 7).
7. **A taxa de repetição do visitante alemão** (§3.1, item 2) — hoje **NÃO CONFERIDO**; sustentada por três indícios convergentes e por nenhuma fonte direta.
8. **A reconferência dos números de Baleares 2025 em AETIB/IBESTAT** (§3.1) — hoje em fonte secundária.

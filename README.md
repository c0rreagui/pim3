# WEG S.A. — Apresentação Interativa (PIM III Marketing UNIP)

Esta é uma plataforma web interativa, responsiva e cinematográfica de altíssimo padrão visual (nível Apple, Stripe, Linear) desenvolvida como o **Projeto Integrado Multidisciplinar (PIM III)** de Marketing da **Universidade Paulista (UNIP)** sobre a **WEG S.A.**

Ao invés de slides de PowerPoint estáticos e comuns, este site eleva a qualidade da apresentação acadêmica ao traduzir os dados rigorosos do PDF original em múltiplos simuladores, dashboards e showrooms de tecnologia em tempo real.

---

## 🎨 O Padrão Visual (The Design System)
- **Dark-First**: Fundo escuro profundo cinematográfico (`#030712`) com cartões com glassmorphism e desfoque de fundo de alta performance.
- **Tipografia Editorial**: Uso da fonte Google Fonts `Outfit` para títulos expressivos de impacto e `Inter` para leitura técnica refinada.
- **Micro-interações a 60fps**: Animações de carregamento, contadores numéricos ativos, transições aceleradas por GPU e efeitos senoidais.

---

## 📂 Mapeamento Exato dos 9 Tópicos do PDF

Cada seção do site representa rigorosamente as informações e dados do PDF oficial do PIM III, enriquecidos por interatividade:

1. **WEG em Números 2025 (Dashboard Financeiro)**:
   - *Dados do PDF*: Receita Operacional R$ 40,8B, ROIC de 32,5%, PD&I de R$ 1,4B e Faturamento Sustentável de 71%.
   - *Interatividade*: Contadores numéricos que aceleram até o valor exato e gráfico radial SVG dinâmico de faturamento verde.

2. **Comportamento do Consumidor & UX (Simulador See+)**:
   - *Dados do PDF*: Decisão racional industrial baseada em TCO (Custo Total de Propriedade) simulado pelo Software See+. Plano de Troca de motores com abatimento de R$ 5,00/kg ou até 8% de desconto em motores IE4/IE5.
   - *Interatividade*: Calculadora interativa de payback em meses e TCO em 10 anos ao arrastar sliders de peso e horas de operação.

3. **Direitos Humanos (Painel Social de Governança)**:
   - *Dados do PDF*: Código de Ética Global em 5 idiomas, comitê DEI/QPCD, plataforma de saúde mental (+Saúde/ViverBem), 95% de acordos sindicais e Programa de Igualdade Racial (meta de 30% em liderança negra até 2027).
   - *Interatividade*: Navegador por abas de governança humana e barra de progresso ativa para o marco de inclusão racial.

4. **Estratégia Competitiva (Battleground & Árvore Bayesiana)**:
   - *Dados do PDF*: Verticalização de chapas, cobre e tintas (ROIC 32,5% vs. 17,8% da Siemens). M&A de ~US$ 400M da Regal Rexnord em Equilíbrio de Nash. Decisão Bayesiana perante tarifas americanas (probabilidade subindo de 40% para 65,38% ativando a expansão local).
   - *Interatividade*: Árvore de Decisão Bayesiana interativa. Ao alterar a probabilidade com o slider, o nó de estratégia de expansão local se ilumina ao cruzar o limiar de 50%.

5. **Ética, Cidadania e Sustentabilidade (Painel ESG)**:
   - *Dados do PDF*: Profit (R$ 1,4B em PD&I), People (335 projetos e 778k pessoas impactadas) e Planet (31,9% de redução de emissões com metas SBTi: 52% até 2030 e Net-Zero até 2050).
   - *Interatividade*: Gráfico de linha vetorial interativo da trajetória científica da SBTi. Passar o mouse nos pontos revela detalhes de auditoria.

6. **Gerenciamento de Produtos, Serviços e Marcas (One-Stop Showroom)**:
   - *Dados do PDF*: One-Stop Shop (motores NEMA/IEC, redutores, drives, tintas, automação e subestações). Rejuvenescimento de portfólio (maturidade do IE2/IE3 e ascensão do IE5/IE6 e Fleet Management). Linha residencial W-Eco (carregadores veiculares, interruptores e bombas).
   - *Interatividade*: Showroom de produtos dinâmico dividido por segmentos e ciclo de vida visual de produtos.

7. **Gestão Estratégica de Custos e Formação de Preços (Paradoxo de Custos)**:
   - *Dados do PDF*: Margens de 33% (Bruta), 22% (EBITDA), 16,7% (Líquida, ROE 35,2%). Paradoxo do TCO: motor representa apenas 5-10% do custo vitalício, enquanto a energia consumida representa 90-95%. Custeio Absorption vs. ABC. Otimização por Lei do Bem (60% de exclusão sobre R$ 1,4B investidos em PD&I).
   - *Interatividade*: Gráfico dinâmico do paradoxo de custos, alternador interativo de custeio (ABC vs. Absorção) e simulador fiscal da Lei do Bem.

8. **Inteligência Artificial Aplicada ao Marketing (AI Showroom)**:
   - *Dados do PDF*: WEGvision.AI + Intel (ganho de 4% de eficiência em cimenteiras B2B). CRM Preditivo via IoT (WEGscan com alarmes automáticos). Chatbot Generativo de autoatendimento técnico.
   - *Interatividade*: Três mini-simuladores: esteira virtual de visão computacional de sacos rasgados, monitor de telemetria IoT com alarmes, e um Chatbot conversacional técnico de autoatendimento funcional.

9. **Proposta de Intervenção: GCLP (Logística Reversa Circular)**:
   - *Dados do PDF*: Emissões de Escopo 3 representam até 85% do impacto. Solução GCLP: Blockchain + RFID. Metas em 5 anos (65.000t de metais nobres regionalizados, 12% de redução de Escopo 3 downstream, retenção >98,5%). Investimento de R$ 32M com payback de 3,5 anos.
   - *Interatividade*: Simulador de emissão de Circular Carbon Credit Tokens (CCT) na blockchain com geração de certificados digitais exclusivos e hash de transação ao digitar o volume retornado.

---

## 🛠️ Tecnologias Utilizadas
1. **React 19** (Vite + TypeScript)
2. **Vanilla CSS nativo** encapsulado e modularizado (CSS Modules / CSS Variables)
3. **Lucide React** para iconografia elegante de precisão

---

## 🚀 Como Executar Localmente

### 1. Instalar as dependências
```bash
npm install
```

### 2. Rodar em ambiente de desenvolvimento
```bash
npm run dev
```
O console exibirá o endereço local (geralmente `http://localhost:5173`). Abra no seu navegador.

### 3. Rodar o build de produção (para testar integridade antes de commitar)
```bash
npm run build
```

---

## 📦 Como Publicar no seu GitHub & Deploy na Vercel

O projeto já possui os commits locais realizados de forma extremamente organizada. Para subí-los para o seu GitHub pessoal e conectar à Vercel, siga os passos abaixo:

### Passo 1: Criar o Repositório no GitHub
1. Vá até o seu painel do GitHub e crie um **Novo Repositório** (ex: `weg-interactive-pim`).
2. Mantenha o repositório **sem** inicializar README, .gitignore ou licença (para evitar conflitos).

### Passo 2: Vincular e Enviar o Código
Abra o seu terminal na pasta do projeto e execute os seguintes comandos:
```bash
# Adiciona o endereço do seu novo repositório GitHub como destino remoto
git remote add origin https://github.com/SEU-USUARIO/weg-interactive-pim.git

# Envia todo o histórico de commits organizados para a branch principal
git branch -M main
git push -u origin main
```
*(Substitua `SEU-USUARIO` e `weg-interactive-pim` pelos seus dados reais do GitHub).*

### Passo 3: Deploy na Vercel
1. Acesse o painel da [Vercel](https://vercel.com/) e faça login com sua conta do GitHub.
2. Clique em **Add New...** > **Project**.
3. Importe o repositório `weg-interactive-pim`.
4. Mantenha as configurações padrões (a Vercel detectará automaticamente o Vite React) e clique em **Deploy**.
5. Em menos de 1 minuto, sua apresentação estará publicada e disponível em uma URL mundial para você apresentar na banca da UNIP!

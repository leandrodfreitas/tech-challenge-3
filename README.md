# Tech Challenge 3 - Gestão Financeira

Aplicação mobile para controle de receitas e despesas com autenticação Firebase.

## Requisitos

- Node.js (v18+)
- npm ou yarn
- Expo CLI

## Instalação

1. Clonar repositório:

```bash
git clone <seu-repositorio>
cd tech-challenge-3
```

2. Instalar dependências:

```bash
npm install
```

## Firebase

A aplicação usa Firebase `tech-challenge-3-9f1ee` (já configurado em `firebase/config.ts`).

Serviços:

- Authentication (Login/Signup)
- Firestore (Transações)
- Cloud Storage (Imagens)

## Executar

### Web

```bash
npm start
```

Aperte `w` no terminal.

### Android

```bash
npm run android
```

### iOS

```bash
npm run ios
```

## Dependências Principais

- `expo` - React Native framework
- `firebase` - Backend
- `@react-navigation` - Navegação
- `@expo/vector-icons` - Ícones
- `react-native-gifted-charts` - Gráficos

## Estrutura

```
app/          - Telas da aplicação
components/   - Componentes
constants/    - Constantes e temas
context/      - Context API
firebase/     - Config Firebase
hooks/        - Custom hooks
utils/        - Utilitários
```

## Recursos

Autenticação com email
Adicionar/editar/deletar transações
Filtrar transações
Gráficos de receitas/despesas

interface Project {
  title: string
  description: string
  functions: string[]
  techs: string[]
  githubUrl: string | undefined
  websiteUrl: string | undefined
}

const projects: Project[] = [
  {
    title: 'GymApp',
    description:
      'Aplicativo feito para você manter um habito de realizar exercicios ',
    functions: [
      'Autenticação',
      'Criar exercicio',
      'Criar treino',
      'Customizar seu perfil (Foto, Nome)',
    ],
    techs: [
      'Expo',
      'NativeBase',
      'Typescript',
      'AsyncStorage',
      'react-hook-form',
      'Expo Image Picker',
    ],
    githubUrl: 'https://github.com/PedroBovolinDavila/GymApp',
    websiteUrl: undefined,
  },

  {
    title: 'Portifólio',
    description:
      'Meu portifólio pessoal, esse projeto é esse site que você esta agora!',
    functions: ['Divulgar', 'Mostrar qualidades'],
    techs: ['React', 'Vite', 'ChakraUI'],
    githubUrl: 'https://github.com/PedroBovolinDavila/portfolio',
    websiteUrl: 'https://pedrodavila.vercel.app',
  },
  {
    title: 'IgCall',
    description:
      'Site para facilitar o agendamento de reuniões ultilizando a api do Google Calendar. Sempre que você marca uma reunião no site ela automaticamente é adicionada ao Google Calendar juntamente com um link do Google Meet criado automaticamente',
    functions: [
      'Marcar reunião',
      'Criar usuário',
      'Integração com a api do Google',
      'Calendário',
    ],
    techs: ['Next', 'Prisma', 'Typescript', 'Mysql', 'NextAuth', 'Google Api'],
    githubUrl: 'https://github.com/PedroBovolinDavila/igcall',
    websiteUrl: 'https://ig-call.vercel.app',
  },
  {
    title: 'Api clone GymPass',
    description:
      'Clone das funcionalidades do aplicativo GymPass em uma Api, seguindo os principios do SOLID',
    functions: [
      'Autenticação JWT',
      'Refresh Token',
      'Cadastrar usuários e academias',
      'Fazer check-in',
      'Gereciamento de permissões',
      'Testes unitarios',
      'Testes end-to-end',
      'Paginação de dados',
      'GitHub Workflow',
    ],
    techs: [
      'Node',
      'Typescript',
      'Fastify',
      'Prisma',
      'Docker',
      'Vitest',
      'Supertest',
      'RBAC',
      'JWT',
      'PostgreSQL',
    ],
    githubUrl: 'https://github.com/PedroBovolinDavila/Solid-api',
    websiteUrl: undefined,
  },
]

export default projects

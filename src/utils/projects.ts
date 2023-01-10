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
    title: 'Api para comércio (em desenvolvimento)',
    description: 'Api para gerenciamento de um comércio',
    functions: [
      'Autenticação',
      'Criar produtos',
      'Criar usuarios',
      'Envio de images',
      'Envio de e-mail',
      'Recuperação de senha',
    ],
    techs: [
      'Node',
      'Typescript',
      'Multer',
      'Docker',
      'Postgres',
      'Typeorm',
      'JWT',
      'SOLID',
    ],
    githubUrl: 'https://github.com/PedroBovolinDavila/ApiComercio',
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
]

export default projects

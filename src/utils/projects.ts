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
]

export default projects

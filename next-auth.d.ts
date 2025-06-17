//   const session = await auth();console.log(session.id); không cảnh báo session possibly null nữa
declare module 'next-auth' {

  interface Session {
    id: string;
  }

  interface JWT {
    id: string;
  }
}
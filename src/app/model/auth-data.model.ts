export interface AuthData {
    email: string;
    password: string;
    confirmPassword: string;
    fullName: string;
    nickname: string;
    birthDate: Date;
    favoriteTeam: string;
    userType: 'usuario' | 'jornalista';
}
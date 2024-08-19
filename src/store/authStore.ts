// import { create, StateCreator } from 'zustand';
// import { devtools } from 'zustand/middleware';

// type AuthState = {
//   realm: string | null;
//   accessToken: string | null;
//   refreshToken: string | null;
//   idToken: string | null;
//   bearerToken: string | null;
//   consoleToken: string | null;
// };

// type AuthActions = {
//   setRealm: (realm: string) => void;
// };

// const initialState: AuthState = {
//   realm: null,
//   accessToken: null,
//   refreshToken: null,
//   idToken: null,
//   bearerToken: null,
//   consoleToken: null,
// };

// const store: StateCreator<AuthState & AuthActions> = (set) => ({
//   ...initialState,
//   setRealm: (realm) =>
//     set((state) => {
//       return { realm: realm };
//     }),
// });

// const useAuthStore = create<
//   AuthState & AuthActions,
//   [['zustand/devtools', never]] | []
// >(process.env.NODE_ENV !== 'production' ? devtools(store) : store);

// export default useAuthStore;

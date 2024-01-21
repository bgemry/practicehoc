
export const setAuthToken = (token: string): void => {
    localStorage.setItem('authToken', token);
  };
  
  export const getAuthToken = (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('authToken');
    }
    
    return null
  };
  
  export const removeAuthToken = (): void => {
    localStorage.removeItem('authToken');
  };
  
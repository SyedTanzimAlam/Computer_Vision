const TEST_EMAIL = "test@example.com";
const TEST_PASSWORD = "password123";

export const TEST_CREDENTIALS = {
  email: TEST_EMAIL,
  password: TEST_PASSWORD,
};

export async function signIn(email: string, password: string): Promise<void> {
  const trimmedEmail = email?.trim() ?? "";
  const trimmedPassword = password?.trim() ?? "";
  const isTestCredentials =
    trimmedEmail === TEST_EMAIL && trimmedPassword === TEST_PASSWORD;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ((trimmedEmail && trimmedPassword) || isTestCredentials) {
        resolve();
        return;
      }

      reject(new Error("Invalid email or password"));
    }, 300);
  });
}

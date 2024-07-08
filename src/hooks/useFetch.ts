//basic custom hook

export const useFetch = async (url: string) => {
  try {
    const response = await fetch(`${url}`);
    console.log(response);
    return response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

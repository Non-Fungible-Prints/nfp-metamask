export const useAlchemy = () => {
    const API_URL = "https://polygon-mumbai.g.alchemy.com/v2/"
    const API_KEY = "qlHepBIzk3Q1BpejaR_dUxVvJCz2kECP"

    const baseURL = API_URL + API_KEY;

    const getNFTFromWallet = async (walletAddress: string) => fetch(`${baseURL}/getNFTs/?owner=${walletAddress}`).then(res => res.json()).catch((error) => console.error(error));

    return { getNFTFromWallet };
}

export default useAlchemy;
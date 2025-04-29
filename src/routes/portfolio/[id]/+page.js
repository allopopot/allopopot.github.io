import portfolios from "$lib/portfolio.json"

export const load = async ({ params }) => {
    params.id
    let foundPortfolio = portfolios.find(el => el.id === params.id)
    return {
        portfolio: foundPortfolio
    }
};
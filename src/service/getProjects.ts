export const getProjects = async () => {
    const response = await fetch('https://api.github.com/users/JxVtrl/repos?per_page=200&page=1')
    
    if (response.ok) {
        const res = await response.json()
        return res
        // const projects = res.map((project: any) => {
        //     return {
        //         name: project.name,
        //         description: project.description,
        //         url: project.html_url,
        //         language: project.language,
        //     }
        // })
        
    }
    throw new Error('Failed to fetch data')

}

import React, { useState, useEffect } from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { data } from '../../mocks';
// import { Container } from './styles';
import { getProjects } from '../../service/getProjects'

export const Projects: React.FC = () => {
    const [projects, setProjects] = useState<object[]>([]);

    useEffect(() => {
        
        const getRepos = async () => {
            let repos = [{}]
            const response = await getProjects();
            
            response.map((repo: any) => {
                repos.push({
                    name: repo.name,
                    description: repo.description,
                    url: repo.html_url,
                    language: repo.language,
                })
            })
            repos.shift()
            setProjects(repos)
        }

        getRepos();
    }, [])
    
    useEffect(() => {
        console.log(projects)
    }, [projects])


    return (
        <Flex flexDir='column' w='80%' gap='100px' margin='230px auto 0'>
            {data.projects.map((item: any) => (
                <Flex
                    key={item.id}
                    border='1px solid #efe1e6'
                    borderRadius='24px'
                    h='500px'
                    justify='space-between'
                >
                    {item.id % 2 === 0 && (
                        <Flex w='55%'>
                            <Image w='100%' objectFit='cover' src={item.src} />
                        </Flex>
                    )}
                    <Flex>
                        {item.name}
                    </Flex>
                    {item.id % 2 !== 0 && (
                        <Flex w='55%'>
                            <Image w='100%' objectFit='cover' src={item.src} />
                        </Flex>
                    )}
                </Flex>
            ))}
        </Flex>
    );
}

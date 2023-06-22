declare const tags: string[];
declare const projects: ({
    title: string;
    description: string;
    long_description: string;
    slug: string;
    languages: string[];
    tags: string[];
    sourcecode: string;
    pypipackge: string;
    documenation?: undefined;
    website?: undefined;
} | {
    title: string;
    description: string;
    long_description: string;
    slug: string;
    languages: string[];
    tags: string[];
    sourcecode: string;
    pypipackge?: undefined;
    documenation?: undefined;
    website?: undefined;
} | {
    title: string;
    description: string;
    long_description: string;
    slug: string;
    languages: string[];
    tags: string[];
    sourcecode: string;
    pypipackge: string;
    documenation: string;
    website?: undefined;
} | {
    title: string;
    description: string;
    long_description: string;
    slug: string;
    languages: string[];
    tags: string[];
    sourcecode: string;
    pypipackge: string;
    documenation: string;
    website: any;
} | {
    title: string;
    description: string;
    long_description: string;
    slug: string;
    languages: string[];
    tags: string[];
    website: string;
    sourcecode: string;
    pypipackge?: undefined;
    documenation?: undefined;
} | {
    title: string;
    description: string;
    long_description: string;
    slug: string;
    languages: string[];
    tags: string[];
    sourcecode?: undefined;
    pypipackge?: undefined;
    documenation?: undefined;
    website?: undefined;
})[];
export { projects, tags };

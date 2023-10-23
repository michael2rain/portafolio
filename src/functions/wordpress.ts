interface WPGraphQLParams {
    query: string;
    variables?: object;
}

export async function wpquery({ query, variables = {} }: WPGraphQLParams) {
    const res = await fetch(`${import.meta.env.WP_URL}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    if (!res.ok) {
        console.error(res);
        return {};
    }

    const { data } = await res.json();

    return data;
}


export async function fetchPosts({ query, variables = {} }: WPGraphQLParams) {
    const res = await fetch(`${import.meta.env.WP_URL}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    if (!res.ok) {
        console.error(res);
        return {};
    }

    const { data } = await res.json();

    return data.posts.nodes.map((post) => {
        return post;
    });
};


export async function fetchProjects({ query, variables = {} }: WPGraphQLParams) {
    const res = await fetch(`${import.meta.env.WP_URL}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    });

    if (!res.ok) {
        console.error(res);
        return {};
    }

    const { data } = await res.json();

    return data.projects.nodes.map((project) => {
        return project;
    });
};
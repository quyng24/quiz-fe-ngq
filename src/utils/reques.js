const API_DOMAIN = 'https://powerful-pitch-cotija.glitch.me/';

export const get = async (path) => {
    const resposive = await fetch(API_DOMAIN + path);
    const result = await resposive.json();
    return result;
}
export const post = async (path, options) => {
    const resposive = await fetch(API_DOMAIN + path, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(options),
    });
    const result = await resposive.json();
    return result;
}
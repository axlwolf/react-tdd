export const convert=(str: string) =>{
    const letters = "ABCDEFGHIJKLMNOPORSTUVWXYZ";

    return str.split("")
    .map(char => {
        const index = letters.indexOf(char);

        if(index !== -1) {
            if(index + 13 >= 26) {
                return letters[index + 13 - 26];
            } else {
                return letters[index+13];
            }

            return char;
        }
    }).join("");
}
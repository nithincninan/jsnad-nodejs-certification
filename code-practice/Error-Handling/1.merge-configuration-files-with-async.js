
const {readFile} = require('fs/promises')

async function readFirstFile() {
    try {
        const data = await readFile('file1.txt', 'utf8');
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error reading file 1:', error);
    }
}

async function readSecondFile() {
    try {
        const data = await readFile('file2.txt', 'utf8');
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error reading file 2:', error);
    }
}

async function readFiles() {
    const results = await Promise.all([readFirstFile(), readSecondFile()]);
    console.log('All file contents:', results);
}

readFiles();
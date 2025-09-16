process.on('message', (array) => {
    console.log('Child process received array:', array);
    const sum = array.reduce((acc, num) => acc + num, 0);
    process.send(sum);
    process.exit();
});

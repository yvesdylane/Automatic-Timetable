function changeClass(Id, Id2, bt, bt2){
    const table = document.getElementById(Id);
    const table1 = document.getElementById(Id2);

    const button = document.getElementById(bt);
    const button2 = document.getElementById(bt2);

    table.setAttribute('active', 'true');
    table1.setAttribute('active', 'false');

    button.className = 'me';
    button2.className = 'motMe';
}
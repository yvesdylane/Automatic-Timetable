function changeClass(Id, Id2, Id3, bt, bt2, bt3){
    const table = document.getElementById(Id);
    const table1 = document.getElementById(Id2);
    const table2 = document.getElementById(Id3);

    const button = document.getElementById(bt);
    const button2 = document.getElementById(bt2);
    const button3 = document.getElementById(bt3);

    table.setAttribute('active', 'true');
    table1.setAttribute('active', 'false');
    table2.setAttribute('active', 'false');

    button.className = 'me';
    button2.className = 'motMe';
    button3.className = 'motMe';
}
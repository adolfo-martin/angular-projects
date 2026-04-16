create table sockets (
    uuid varchar(40) not null primary key ,
    name varchar(30) not null unique,
    platform varchar(10) not null
) CHARSET=utf8mb4;

insert into sockets values ("0b828c2f-c0c7-49e7-9762-1aea55302436", "AM4", "AMD");
insert into sockets values ("1c7b137a-6692-45a5-9542-a6e3de8b95eb", "AM5", "AMD");
insert into sockets values ("0ddd1e68-832a-4c90-9f23-aba7e2c4806c", "1200", "Intel");
insert into sockets values ("3562442d-cd8d-4c74-99c0-530731b13f59", "1700", "Intel");

create table processors (
    uuid varchar(40) not null primary key,
    longname varchar(100) not null unique,
    shortname varchar(50) not null unique,
    socket_uuid varchar(40) not null,
    cores tinyint not null,
    frequency decimal(4, 2) not null,
    price decimal(10, 2) not null,
    foreign key (socket_uuid) references sockets (uuid)
) CHARSET=utf8mb4;

insert into processors values ("522440e8-2f1e-4caa-9f9c-7bc09ed63d66", "AMD Ryzen 7 5800X3D", "R7 5800X3D", "0b828c2f-c0c7-49e7-9762-1aea55302436", 8, 3.4, 375.90);
insert into processors values ("5d8141d8-0e5f-4e0e-b98b-3af36bb68d9c", "AMD Ryzen 7 5800X", "R7 5800X", "0b828c2f-c0c7-49e7-9762-1aea55302436", 8, 3.8, 261.25);
insert into processors values ("7f01ddec-8256-41d6-8d18-fcafb94d6f3e", "AMD Ryzen 5 5600X", "R5 5600X", "0b828c2f-c0c7-49e7-9762-1aea55302436", 6, 3.7, 198.99);
insert into processors values ("ad66738a-0be4-4668-8763-6ff775111023", "AMD Ryzen 5 5600G", "R5 5600G", "0b828c2f-c0c7-49e7-9762-1aea55302436", 6, 3.9, 149.45);
insert into processors values ("8b433208-8568-468e-983c-34f83c06b54f", "AMD Ryzen 5 4600G", "R5 4600G", "0b828c2f-c0c7-49e7-9762-1aea55302436", 6, 4.2, 108.90);
insert into processors values ("a68556c0-fbf5-458d-b6a2-b3dcaadc64af", "AMD Ryzen 5 3600", "R5 3600", "0b828c2f-c0c7-49e7-9762-1aea55302436", 6, 3.6, 102.90);
insert into processors values ("c51ff40f-ffc8-4c6d-8bf9-90c279cf8926", "AMD Ryzen 3 3200G", "R3 3200G", "0b828c2f-c0c7-49e7-9762-1aea55302436", 4, 3.6, 94.95);
insert into processors values ("b8972050-9b94-44ae-803d-ae37c08dd29b", "AMD Ryzen 5 4500", "R5 4500", "0b828c2f-c0c7-49e7-9762-1aea55302436", 6, 3.6, 89.99);
insert into processors values ("dbafaf1a-959a-4d74-8f77-afb7643d16d2", "AMD Ryzen 3 4100", "R3 4100", "0b828c2f-c0c7-49e7-9762-1aea55302436", 4, 3.8, 79.90);

insert into processors values ("cf7adb35-c184-40fb-9b9c-d71cb8b3f22a", "AMD Ryzen 9 7950X", "R9 7950X", "1c7b137a-6692-45a5-9542-a6e3de8b95eb", 16, 4.5, 678.80);
insert into processors values ("d4195af7-8374-4373-8e84-a1b70e3131a5", "AMD Ryzen 9 7900X", "R9 7900X", "1c7b137a-6692-45a5-9542-a6e3de8b95eb", 12, 4.7, 508.90);
insert into processors values ("3e2f7858-6878-403e-ba7f-92d83ec45cf8", "AMD Ryzen 7 7700X", "R7 7700X", "1c7b137a-6692-45a5-9542-a6e3de8b95eb", 8, 4.5, 399.90);
insert into processors values ("8eb37035-2f78-499c-b51b-c3475b5e1324", "AMD Ryzen 7 7700", "R7 7700", "1c7b137a-6692-45a5-9542-a6e3de8b95eb", 8, 3.8, 384.50);
insert into processors values ("051eb836-9d09-474f-8a45-bd1b1c2b7f0d", "AMD Ryzen 7 7600X", "R7 7600X", "1c7b137a-6692-45a5-9542-a6e3de8b95eb", 6, 4.7, 260.50);


insert into processors values ("51da5e88-03c6-4d33-804a-28874d142474", "Intel Celeron G5905", "Celeron G5905", "0ddd1e68-832a-4c90-9f23-aba7e2c4806c", 2, 3.5, 48.99);
insert into processors values ("221ad778-d9f2-4bc5-a5b8-fe11c9240a41", "Intel Core i3 10100F", "i3 10100F", "0ddd1e68-832a-4c90-9f23-aba7e2c4806c", 4, 3.60, 74.25);
insert into processors values ("ca04e5b0-63a4-436c-b79e-992bb926144c", "Intel Core i5 10400", "i5 10400", "0ddd1e68-832a-4c90-9f23-aba7e2c4806c", 6, 2.9, 137.99);
insert into processors values ("1d3f1270-57c6-4e9c-af30-e8e2ab6874d6", "Intel Core i5 11400F", "i5 11400F", "0ddd1e68-832a-4c90-9f23-aba7e2c4806c", 6, 2.6, 166.05);
insert into processors values ("633daeda-6b0f-4c55-9446-b555ca0d31ce", "Intel Core i5 11600KF", "i5 11600KF", "0ddd1e68-832a-4c90-9f23-aba7e2c4806c", 6, 3.9, 264.95);
insert into processors values ("9b6faac6-2d78-4234-bb6e-727f5590ecca", "Intel Core i9 11900K", "i9 11900K", "0ddd1e68-832a-4c90-9f23-aba7e2c4806c", 8, 3.5, 379.90);


insert into processors values ("87ab3c70-ad97-423d-ace8-330e93cb7570", "Intel Pentium Gold G7400", "Pentium G7400", "3562442d-cd8d-4c74-99c0-530731b13f59", 2, 3.7, 102.15);
insert into processors values ("092ba930-491a-47ed-9e63-c90af540cabd", "Intel Core i3 12100F", "i3 12100F", "3562442d-cd8d-4c74-99c0-530731b13f59", 4, 3.3, 109.99);
insert into processors values ("eb8176d9-c405-4609-99be-506ccd4d1847", "Intel Core i5 12400", "i5 12400", "3562442d-cd8d-4c74-99c0-530731b13f59", 6, 2.5, 196.35);
insert into processors values ("a66113c7-76f7-43e7-a7ff-c2cd125ad54d", "Intel Core i5 13400", "i5 13400", "3562442d-cd8d-4c74-99c0-530731b13f59", 10, 2.7, 239.89);
insert into processors values ("ade7d429-1785-4582-9490-cdbf45f57fe2", "Intel Core i5 12600", "i5 12600", "3562442d-cd8d-4c74-99c0-530731b13f59", 6, 2.5, 291.85);
insert into processors values ("55f387cc-87ba-49d9-96df-e701850d900a", "Intel Core i7 13700F", "i7 13700F", "3562442d-cd8d-4c74-99c0-530731b13f59", 16, 2.4, 389.90);
insert into processors values ("7727ba0f-f23d-4cb3-99f8-6dfbe1c42d45", "Intel Core i7 12700KF", "i7 12700KF", "3562442d-cd8d-4c74-99c0-530731b13f59", 12, 3.6, 372.80);
insert into processors values ("3b54f7de-7d85-4939-aaaa-ba09cd9161b9", "Intel Core i9 12900KF", "i9 12900KF", "3562442d-cd8d-4c74-99c0-530731b13f59", 12, 3.2, 514.35);
insert into processors values ("4f2624eb-1548-44ae-9064-9713b1de5d15", "Intel Core i9 13900KF", "i9 13900KF", "3562442d-cd8d-4c74-99c0-530731b13f59", 24, 3.0, 639.50);



create table motherboards (
    uuid varchar(40) not null primary key,
    name varchar(100) not null unique,
    chipset varchar(10) not null,
    socket_uuid varchar(40) not null,
    memory_slots tinyint not null,
    m2_slots tinyint not null,
    pci_slots tinyint not null,
    price decimal(10, 2) not null,
    foreign key (socket_uuid) references sockets (uuid)
) CHARSET=utf8mb4;

insert into motherboards values ("1887bae7-0f88-445c-9045-937149301ce4", "Gigabyte B450M K", "B450", "0b828c2f-c0c7-49e7-9762-1aea55302436", 2, 1, 2, 72.00);
insert into motherboards values ("b020280c-bfcf-4647-83b4-f38e1557b252", "MSI PRO B550M-P GEN3", "B550", "0b828c2f-c0c7-49e7-9762-1aea55302436", 4, 1, 3, 109.89);
insert into motherboards values ("39c12ad3-313b-45d1-b185-77e299fb2b36", "Asus PRIME B550M-A WIFI II", "B550", "0b828c2f-c0c7-49e7-9762-1aea55302436", 4, 2, 3, 146.95);
insert into motherboards values ("862a401f-47dd-4862-b919-3c1a30103a32", "Gigabyte X570S UD", "X570", "0b828c2f-c0c7-49e7-9762-1aea55302436", 4, 2, 4, 165.00);
insert into motherboards values ("abeb99cc-2084-4308-87b2-d4323e44a3ce", "Asus ROG STRIX B550-F GAMING WIFI II", "B550", "0b828c2f-c0c7-49e7-9762-1aea55302436", 4, 2, 3, 214.80);
insert into motherboards values ("863256e5-00b5-420e-86d1-3dcbd23eaaf1", "Asus TUF GAMING X570-PRO (WI-FI)", "X570", "0b828c2f-c0c7-49e7-9762-1aea55302436", 4, 2, 5, 272.99);

insert into motherboards values ("024eb962-96f2-4a35-ab08-341dd6ef77cb", "Gigabyte B650M DS3H", "B650", "1c7b137a-6692-45a5-9542-a6e3de8b95eb", 4, 2, 2, 190.99);
insert into motherboards values ("cd96ddb0-2246-4eb4-b4a2-f0c684d9a2bb", "ASUS PRIME B650M-A WIFI", "B650", "1c7b137a-6692-45a5-9542-a6e3de8b95eb", 4, 2, 3, 199.90);
insert into motherboards values ("967074a6-4adb-47d3-86d7-ace40c1d00a3", "MSI PRO B650M-A WIFI", "B650", "1c7b137a-6692-45a5-9542-a6e3de8b95eb", 4, 2, 3, 223.25);
insert into motherboards values ("0ade031e-fcdc-4ef1-b832-411ad57dc171", "Gigabyte B650 AORUS ELITE AX", "B650", "1c7b137a-6692-45a5-9542-a6e3de8b95eb", 4, 3, 3, 268.90);
insert into motherboards values ("5ba960e5-16a1-4f27-aa92-aa428027d02b", "ASUS PRIME X670-P WIFI", "X670", "1c7b137a-6692-45a5-9542-a6e3de8b95eb", 4, 3, 4, 289.90);
insert into motherboards values ("bb40e89b-886c-4ada-aedb-75fa2005bc2f", "Asrock X670E PG Lightning", "X670", "1c7b137a-6692-45a5-9542-a6e3de8b95eb", 4, 3, 4, 326.99);
insert into motherboards values ("d9de6612-6ff1-4918-8bbf-d89f84849eef", "MSI PRO X670-P WIFI", "X670", "1c7b137a-6692-45a5-9542-a6e3de8b95eb", 4, 4, 3, 329.89);
insert into motherboards values ("d24bcce4-f0bc-4adc-9cd5-259e8d30d408", "ASUS ROG STRIX X670E-F GAMING WIFI", "X670", "1c7b137a-6692-45a5-9542-a6e3de8b95eb", 4, 4, 3, 487.90);

insert into motherboards values ("54d2090a-6b15-4b02-80de-6aeadec324f0", "Gigabyte H410M H V2", "H410", "0ddd1e68-832a-4c90-9f23-aba7e2c4806c", 2, 1, 3, 69.11);
insert into motherboards values ("1608cae9-515e-420c-b341-cab89e2be984", "ASRock H510M-HVS R2.0", "H510", "0ddd1e68-832a-4c90-9f23-aba7e2c4806c", 2, 0, 2, 72.99);
insert into motherboards values ("8e325889-7d61-47a7-8cae-457b31cfec78", "AsRock H470M-HDV/M.2", "H470", "0ddd1e68-832a-4c90-9f23-aba7e2c4806c", 2, 1, 3, 74.95);
insert into motherboards values ("ef54b368-d6f9-4b67-9469-beb20b7d0eaf", "MSI B560M PRO-E", "B560", "0ddd1e68-832a-4c90-9f23-aba7e2c4806c", 2, 1, 2, 105.30);
insert into motherboards values ("ff19c73c-7dc8-4e9d-a014-629ac676a730", "AsRock H510M-ITX/ac", "H510", "0ddd1e68-832a-4c90-9f23-aba7e2c4806c", 2, 1, 1, 123.30);
insert into motherboards values ("be1d2af9-e32f-4dcd-8398-8dd0b80201e6", "MSI MAG B560M MORTAR", "B560", "0ddd1e68-832a-4c90-9f23-aba7e2c4806c", 4, 1, 3, 148.15);
insert into motherboards values ("39c0ab9a-b748-4558-b7e8-8068b6cff93b", "Gigabyte Z590 GAMING X", "Z590", "0ddd1e68-832a-4c90-9f23-aba7e2c4806c", 4, 2, 4, 155.35);
insert into motherboards values ("9c018416-1bc1-4761-a487-6c4cb3630410", "Asus TUF GAMING B560M-PLUS WIFI", "B560M", "0ddd1e68-832a-4c90-9f23-aba7e2c4806c", 4, 2, 3, 168.99);
insert into motherboards values ("76b71a2a-891a-438f-9263-a461b8915c0b", "MSI Z490-A PRO", "Z490", "0ddd1e68-832a-4c90-9f23-aba7e2c4806c", 4, 2, 5, 208.80);
insert into motherboards values ("f44f50c7-bb55-4f73-b594-be9cc7092ba3", "Asus ROG STRIX Z590-E GAMING WIFI", "Z590", "0ddd1e68-832a-4c90-9f23-aba7e2c4806c", 4, 3, 3, 424.50);


insert into motherboards values ("663a4409-ed07-461c-a6e9-f08d6de12ba8", "Asrock H610M-HVS", "H610", "3562442d-cd8d-4c74-99c0-530731b13f59", 2, 0, 2, 82.99);
insert into motherboards values ("df3080b1-6e61-41c4-831f-ff6e081aa6dc", "MSI PRO H610M-G DDR4", "H610", "3562442d-cd8d-4c74-99c0-530731b13f59", 2, 2, 2, 90.89);
insert into motherboards values ("91981ffe-f816-46b1-a8df-9359c4e3b954", "Gigabyte H610M S2H DDR4", "H610", "3562442d-cd8d-4c74-99c0-530731b13f59", 2, 1, 2, 94.95);
insert into motherboards values ("2467915b-367d-481f-9606-fcdf12570a79", "Asus PRIME B660M-K D4", "B660", "3562442d-cd8d-4c74-99c0-530731b13f59", 2, 2, 3, 110.90);
insert into motherboards values ("cdab8688-1e59-49bd-be43-4765596c8aeb", "Gigabyte B660M DS3H DDR4", "B660", "3562442d-cd8d-4c74-99c0-530731b13f59", 4, 2, 3, 117.99);
insert into motherboards values ("c5a9a43f-5e60-4f68-a428-0f814cec8a00", "Asrock B660M Pro RS", "B660", "3562442d-cd8d-4c74-99c0-530731b13f59", 4, 1, 3, 136.45);
insert into motherboards values ("7ce2e6c7-51d2-47d0-b367-8d942ec46b30", "Gigabyte B760M GAMING X DDR4", "B760", "3562442d-cd8d-4c74-99c0-530731b13f59", 4, 2, 2, 149.90);
insert into motherboards values ("66aa7287-3c69-4e0c-b1d8-a178759bb5ef", "ASUS Prime B760M-A D4", "B760", "3562442d-cd8d-4c74-99c0-530731b13f59", 4, 2, 2, 159.89);
insert into motherboards values ("67c0aef0-25d4-435f-9e71-b4a2e90a40ac", "MSI PRO B660M-A WIFI DDR4", "B660", "3562442d-cd8d-4c74-99c0-530731b13f59", 4, 2, 3, 159.89);
insert into motherboards values ("baad1a2d-33cc-4cfc-b3bf-913416b66b7c", "Asus PRIME Z690M-PLUS D4", "Z690", "3562442d-cd8d-4c74-99c0-530731b13f59", 4, 3, 4, 189.99);
insert into motherboards values ("2d2ae42a-229d-49bf-9b6c-36cf92be56d0", "Asrock Z690 Phantom Gaming 4", "Z690", "3562442d-cd8d-4c74-99c0-530731b13f59", 4, 3, 5, 194.30);
insert into motherboards values ("1b294445-16d6-4a8c-806f-39ab2c022669", "Gigabyte Z790 UD", "Z790", "3562442d-cd8d-4c74-99c0-530731b13f59", 4, 3, 5, 250.99);
insert into motherboards values ("7a986967-7060-4528-a07c-054d1d9fbfdc", "Asus ROG STRIX Z690-G GAMING WIFI", "Z690", "3562442d-cd8d-4c74-99c0-530731b13f59", 4, 3, 3, 250.99);
insert into motherboards values ("d17498f7-742b-40c5-a21f-e7ddfc1f1e51", "Gigabyte Z790 AERO G", "Z790", "3562442d-cd8d-4c74-99c0-530731b13f59", 4, 3, 3, 459.75);


# select longname, name from sockets, processors where sockets.uuid = socket_uuid;
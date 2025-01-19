--
-- PostgreSQL database dump
--

-- Dumped from database version 17.2
-- Dumped by pg_dump version 17.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: images; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.images (id, image_url) FROM stdin;
1	https://api.dicebear.com/9.x/adventurer/svg?seed=Jessica&hair=long22&hairColor=592454
2	https://api.dicebear.com/9.x/adventurer/svg?seed=Luis&earrings[]&earringsProbability=100&glassesProbability=100&hair=short14&hairColor=6a4e35,796a45&mouth=variant01&skinColor=f2d3b1
3	https://api.dicebear.com/9.x/adventurer/svg?seed=Nolan&earrings[]&earringsProbability=100&glassesProbability=100&hair=short17,short08,long25&hairColor=6a4e35,796a45&mouth=variant01,variant06,variant05,variant04,variant03,variant02,variant07,variant08,variant09,variant10,variant11,variant12,variant13,variant14,variant15,variant16,variant17&skinColor=f2d3b1
4	https://api.dicebear.com/9.x/adventurer/svg?seed=Luis&earrings[]&earringsProbability=100&glassesProbability=100&hair=long24&hairColor=6a4e35&mouth=variant02&skinColor=f2d3b1
5	https://api.dicebear.com/9.x/adventurer/svg?seed=Eliza&earrings[]&earringsProbability=100&glassesProbability=100&hair=short08&hairColor=6a4e35&mouth=variant02&skinColor=f2d3b1
6	https://api.dicebear.com/9.x/adventurer/svg?seed=Mason&earrings[]&earringsProbability=100&glassesProbability=100&hair=short09&hairColor=0e0e0e&mouth=variant02&skinColor=9e5622
7	https://api.dicebear.com/9.x/adventurer/svg?seed=Chase&earrings[]&earringsProbability=100&glassesProbability=0&hair=short03&hairColor=0e0e0e&mouth=variant02&skinColor=9e5622
8	https://api.dicebear.com/9.x/adventurer/svg?seed=Brooklynn&earrings[]&earringsProbability=100&glassesProbability=100&hair=short14&hairColor=562306&mouth=variant02&skinColor=f2d3b1
9	https://api.dicebear.com/9.x/adventurer/svg?seed=Maria
10	https://api.dicebear.com/9.x/adventurer/svg?seed=Easton
11	https://api.dicebear.com/9.x/adventurer/svg?seed=Oliver
12	https://api.dicebear.com/9.x/adventurer/svg?seed=Chase
13	https://api.dicebear.com/9.x/adventurer/svg?seed=Jude
14	https://api.dicebear.com/9.x/adventurer/svg?seed=Eliza
15	https://api.dicebear.com/9.x/adventurer/svg?seed=Jocelyn&hair=long05&hairColor=0e0e0e,562306
16	https://api.dicebear.com/9.x/adventurer/svg?seed=Vivian
17	https://api.dicebear.com/9.x/adventurer/svg?seed=Riley
18	https://api.dicebear.com/9.x/adventurer/svg?seed=Katherine
\.


--
-- Data for Name: linguagens; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.linguagens (id, nome, foto_url, tipo, dica1, dica2, dica3, dica4, dica5) FROM stdin;
1	Python	https://cdn.iconscout.com/icon/free/png-256/free-python-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-3030224.png?f=webp	back	x = [i**2 for i in range(5)]	def soma(a, b): return a + b	for i in range(5): print(i)	print("Hello, World!")	# código em Python
2	JavaScript	https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png	front	const obj = { a: 1, b: 2 };	[1, 2, 3].filter(x => x > 1);	function soma(a, b) { return a + b; }	console.log("Hello, World!");	// código em JavaScript
3	Java	https://www.svgrepo.com/show/184143/java.svg	back	String.join(",", Arrays.asList("a", "b"));	List<Integer> numeros = new ArrayList<>();	int soma(int a, int b) { return a + b; }	System.out.println("Hello, World!");	// código em Java
4	C#	https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1820px-Logo_C_sharp.svg.png	back	var dict = new Dictionary<string, int>();	var numeros = new[] { 1, 2, 3 };	int Soma(int a, int b) => a + b;	Console.WriteLine("Hello, World!");	// código em C#
5	SQL	https://www.svgrepo.com/show/331760/sql-database-generic.svg	bd	CREATE INDEX idx_nome ON tabela (coluna1);	SELECT COUNT(*) FROM tabela;	INSERT INTO tabela (coluna1, coluna2) VALUES ('valor1', 'valor2');	SELECT * FROM tabela;	-- código em SQL
6	Ruby	https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/768px-Ruby_logo.svg.png	back	numbers = [1, 2, 3].map { |n| n * 2 }	def soma(a, b) a + b end	puts "Hello, World!"	3.times { |i| puts i }	# código em Ruby
7	PHP	https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png	back	$array = array_map(fn($x) => $x * 2, [1, 2, 3]);	function soma($a, $b) { return $a + $b; }	echo "Hello, World!";	for ($i = 0; $i < 5; $i++) { echo $i; }	// código em PHP
8	Go	https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/768px-Go_Logo_Blue.svg.png	back	go func main() { fmt.Println("Go is fun!") }	var arr = []int{1, 2, 3}	func add(a, b int) int { return a + b }	fmt.Println("Hello, World!")	// código em Go
9	Kotlin	https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/768px-Kotlin_Icon.png	back	val list = listOf(1, 2, 3)	fun sum(a: Int, b: Int): Int = a + b	for (i in 1..5) { println(i) }	println("Hello, World!")	// código em Kotlin
10	Swift	https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Swift_logo.svg/768px-Swift_logo.svg.png	back	let numbers = [1, 2, 3].map { $0 * 2 }	func sum(a: Int, b: Int) -> Int { return a + b }	for i in 1...5 { print(i) }	print("Hello, World!")	// código em Swift
11	C++	https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg	back	#include <vector>	std::vector<int> nums = {1, 2, 3};	int sum(int a, int b) { return a + b; }	std::cout << "Hello, World!" << std::endl;	// código em C++
12	TypeScript	https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg	front	let nums: number[] = [1, 2, 3];	const add = (a: number, b: number): number => a + b;	nums.map(x => console.log(x));	console.log("Hello, World!");	// código em TypeScript
13	Rust	https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg	back	let nums: Vec<i32> = vec![1, 2, 3];	fn add(a: i32, b: i32) -> i32 { a + b }	for i in 0..5 { println!("{}", i); }	println!("Hello, World!");	// código em Rust
14	R	https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/768px-R_logo.svg.png	bd	nums <- c(1, 2, 3)	sum <- function(a, b) { return(a + b) }	for (i in 1:5) { print(i) }	print("Hello, World!")	# código em R
15	Shell Script	https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png	back	nums=(1 2 3)	add() { echo $(($1 + $2)); }	for i in {1..5}; do echo $i; done	echo "Hello, World!"	# código em Shell Script
16	Lua	https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg	back	nums = {1, 2, 3}	function sum(a, b) return a + b end	for i = 1, 5 do print(i) end	print("Hello, World!")	-- código em Lua
17	C	https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png	back	#include <stdio.h>	int arr[] = {1, 2, 3};	int add(int a, int b) { return a + b; }	printf("Hello, World!\\\\n");	// código em C
\.


--
-- Data for Name: ranking; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ranking (id, nick, cor, avatar, pontos, modo_jogo) FROM stdin;
1	yEdson	#1c1cdb	https://api.dicebear.com/9.x/adventurer/svg?seed=Mason&earrings[]&earringsProbability=100&glassesProbability=100&hair=short09&hairColor=0e0e0e&mouth=variant02&skinColor=9e5622	1000	Pelo Codigo
2	Coda Fofo	#e4f312	https://api.dicebear.com/9.x/adventurer/svg?seed=Eliza&earrings[]&earringsProbability=100&glassesProbability=100&hair=short08&hairColor=6a4e35&mouth=variant02&skinColor=f2d3b1	14000	Pelo Codigo
6	Ryan	#1eff00	https://api.dicebear.com/9.x/adventurer/svg?seed=Luis&earrings[]&earringsProbability=100&glassesProbability=100&hair=short14&hairColor=6a4e35,796a45&mouth=variant01&skinColor=f2d3b1	8600	Pelo Codigo
7	Deltta	#1c1cdb	https://api.dicebear.com/9.x/adventurer/svg?seed=Chase&earrings[]&earringsProbability=100&glassesProbability=0&hair=short03&hairColor=0e0e0e&mouth=variant02&skinColor=9e5622	14000	Pelo Codigo
8	OdeioFront	#2b5b1a	https://api.dicebear.com/9.x/adventurer/svg?seed=Luis&earrings[]&earringsProbability=100&glassesProbability=100&hair=short14&hairColor=6a4e35,796a45&mouth=variant01&skinColor=f2d3b1	14000	Pelo Codigo
9	SouRaiz?	#ffffff	https://api.dicebear.com/9.x/adventurer/svg?seed=Chase	23100	Pelo Codigo
\.


--
-- Name: images_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.images_id_seq', 18, true);


--
-- Name: linguagens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.linguagens_id_seq', 17, true);


--
-- Name: ranking_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.ranking_id_seq', 11, true);


--
-- PostgreSQL database dump complete
--


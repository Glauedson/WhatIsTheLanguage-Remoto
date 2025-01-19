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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: images; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.images (
    id integer NOT NULL,
    image_url text NOT NULL
);


ALTER TABLE public.images OWNER TO postgres;

--
-- Name: images_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.images_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.images_id_seq OWNER TO postgres;

--
-- Name: images_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.images_id_seq OWNED BY public.images.id;


--
-- Name: linguagens; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.linguagens (
    id integer NOT NULL,
    nome character varying(50) NOT NULL,
    foto_url text NOT NULL,
    tipo character varying(20) NOT NULL,
    dica1 text NOT NULL,
    dica2 text NOT NULL,
    dica3 text NOT NULL,
    dica4 text NOT NULL,
    dica5 text NOT NULL
);


ALTER TABLE public.linguagens OWNER TO postgres;

--
-- Name: linguagens_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.linguagens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.linguagens_id_seq OWNER TO postgres;

--
-- Name: linguagens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.linguagens_id_seq OWNED BY public.linguagens.id;


--
-- Name: ranking; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ranking (
    id integer NOT NULL,
    nick character varying(100) NOT NULL,
    cor character varying(7) NOT NULL,
    avatar text NOT NULL,
    pontos integer DEFAULT 0 NOT NULL,
    modo_jogo character varying(50) NOT NULL
);


ALTER TABLE public.ranking OWNER TO postgres;

--
-- Name: ranking_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.ranking_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.ranking_id_seq OWNER TO postgres;

--
-- Name: ranking_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.ranking_id_seq OWNED BY public.ranking.id;


--
-- Name: images id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.images ALTER COLUMN id SET DEFAULT nextval('public.images_id_seq'::regclass);


--
-- Name: linguagens id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.linguagens ALTER COLUMN id SET DEFAULT nextval('public.linguagens_id_seq'::regclass);


--
-- Name: ranking id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ranking ALTER COLUMN id SET DEFAULT nextval('public.ranking_id_seq'::regclass);


--
-- Name: images images_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);


--
-- Name: linguagens linguagens_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.linguagens
    ADD CONSTRAINT linguagens_pkey PRIMARY KEY (id);


--
-- Name: ranking ranking_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ranking
    ADD CONSTRAINT ranking_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--


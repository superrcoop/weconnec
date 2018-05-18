--
-- PostgreSQL database dump
--

-- Dumped from database version 10.3
-- Dumped by pg_dump version 10.3

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: follows; Type: TABLE; Schema: public; Owner: superrcoop
--

CREATE TABLE public.follows (
    follows_id integer NOT NULL,
    user_id integer,
    follower_id integer
);


ALTER TABLE public.follows OWNER TO superrcoop;

--
-- Name: posts; Type: TABLE; Schema: public; Owner: superrcoop
--

CREATE TABLE public.posts (
    post_id character varying(80) NOT NULL,
    user_id integer,
    photo character varying(80),
    caption character varying(120),
    created_on date
);


ALTER TABLE public.posts OWNER TO superrcoop;

--
-- Name: users; Type: TABLE; Schema: public; Owner: superrcoop
--

CREATE TABLE public.users (
    user_id integer NOT NULL,
    username character varying(80),
    password character varying(255),
    firstname character varying(80),
    lastname character varying(80),
    email character varying(80),
    biography character varying(300),
    profile_photo character varying(80),
    joined_on date
);


ALTER TABLE public.users OWNER TO superrcoop;

--
-- Data for Name: follows; Type: TABLE DATA; Schema: public; Owner: superrcoop
--

COPY public.follows (follows_id, user_id, follower_id) FROM stdin;
\.


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: superrcoop
--

COPY public.posts (post_id, user_id, photo, caption, created_on) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: superrcoop
--

COPY public.users (user_id, username, password, firstname, lastname, email, biography, profile_photo, joined_on) FROM stdin;
\.


--
-- Name: follows follows_pkey; Type: CONSTRAINT; Schema: public; Owner: superrcoop
--

ALTER TABLE ONLY public.follows
    ADD CONSTRAINT follows_pkey PRIMARY KEY (follows_id);


--
-- Name: posts posts_pkey; Type: CONSTRAINT; Schema: public; Owner: superrcoop
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (post_id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: superrcoop
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);


--
-- Name: follows follows_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: superrcoop
--

ALTER TABLE ONLY public.follows
    ADD CONSTRAINT follows_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: posts posts_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: superrcoop
--

ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--


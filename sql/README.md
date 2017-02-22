Para gerar os arquivos `schema.sql`, `qualis_evento.sql` e `qualis_periodico`:

```
$ pg_dump -h 0.0.0.0 -p 5432 -d silq2 -U postgres -s > sql/schema.sql
$ pg_dump -h 0.0.0.0 -p 5432 -d silq2 -U postgres -a -t tb_qualis_periodico > sql/qualis_periodico.sql
$ pg_dump -h 0.0.0.0 -p 5432 -d silq2 -U postgres -a -t tb_qualis_evento > sql/qualis_evento.sql
```

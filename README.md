# DATASIL


## caso de uso 1: (escolher uma base de dados)
- fazer upload de um arquivo csv para o storage, no volume 1. (minio)
- criar um script pyspark para ler o arquivo e salvar em parquet no volume 2. (spark operator)
- criar uma tabela no catalog. (hive metastore, trino)
- criar um dashboard com gráficos.
- criar um workflow para executar o script 1x ao dia. (argo workflows)
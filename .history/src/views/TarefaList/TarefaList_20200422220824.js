import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { TarefasToolbar, TarefasTable } from './components';
import axios from 'axios';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  }
}));

const API_URL = 'https://minhastarefas-api.herokuapp.com/tarefas'

const TarefaList = (props) => {
  const classes = useStyles();

  const [tarefas, setTarefas] = useState([]);
  const [openDialog, setOpenDialog] = useState(false)
  const [mensagem, setMensagem] = useState('')

  const salvar = (tarefa) => {
    axios.post(API_URL, tarefa, {
      headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado') }
    }).then(response => {
      const novaTarefa = response.data
      setTarefas([...tarefas, novaTarefa])
      setMensagem('Item adicionado com sucesso')
      setOpenDialog(true);
    }).catch(erro => {
      setMensagem('Ocorreu um erro')
      setOpenDialog(true)
    })
  }

  const listarTarefas = () => {
    axios.get(API_URL, {
      headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado') }
    }).then(response => {
      const listaDeTarefas = response.data
      setTarefas(listaDeTarefas)
    }).catch(erro => {
      setMensagem('Ocorreu um erro', erro)
      setOpenDialog(true)
    })
  }

  const alterarStatus = (id) => {
    axios.patch(`${API_URL}/${id}`, null, {
      headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado') }
    }).then(response => {
      const lista = [...tarefas]
      lista.forEach(tarefa => {
        if (tarefa.id === id) {
          tarefa.done = true;
        }
      })
      setTarefas(lista)
      // setMensagem('Item atualizado com sucesso')
      // setOpenDialog(true)
    }).catch(erro => {
      setMensagem('Erro ao atualizar tarefa')
      setOpenDialog(true)
    })
  }

  const deletar = (id) => {
    axios.delete(`${API_URL}/${id}`, {
      headers: { 'x-tenant-id': localStorage.getItem('email_usuario_logado') }
    }).then(response => {
      const lista = tarefas.filter(tarefa => tarefa.id !== id)
      setTarefas(lista)
      setMensagem('Item removido com sucesso')
      setOpenDialog(true)
    }).catch(erro => {
      setOpenDialog(true)
      setMensagem('Erro ao remover item')
    })
  }

  useEffect(() => {
    listarTarefas();
  }, [])

  return (
    <div className={classes.root}>
      <TarefasToolbar salvar={salvar} />
      <div className={classes.content}>
        <TarefasTable alterarStatus={alterarStatus}
          deleteAction={deletar}
          tarefas={tarefas} />
      </div>

      <Dialog open={openDialog} onClose={e => setOpenDialog(false)}>

        <DialogTitle>Atenção</DialogTitle>

        <DialogContent>
          {mensagem}
        </DialogContent>

        <DialogActions>
          <Button onClick={e => setOpenDialog(false)}>FECHAR</Button>
        </DialogActions>

      </Dialog>

    </div>
  );
};

export default TarefaList;

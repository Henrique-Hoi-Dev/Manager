import React, { Component } from 'react';
import { FcUndo, FcRightUp2, FcDocument } from 'react-icons/fc';
import { Link } from 'react-router-dom';

import api from '~/services/eee/api';
import { Container, List, Button, SubmitButton, Ul } from './styles';

export default class Repository extends Component {
  state = {
    newRepo: '',
    repositories: [],
  };
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }
  // Executado sempre que houver uma alteração nas props ou states ele faz a comparação das props e states anterior
  // com as nossas alterações e executa (this.props this.state)
  componentDidUpdate(_, PrevState) {
    if (PrevState.repositories !== this.state.repositories) {
      localStorage.setItem(
        'repositories',
        JSON.stringify(this.state.repositories)
      );
    }
  }

  handleInputChange = (e) => {
    this.setState({ newRepo: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { newRepo, repositories } = this.state;

    const response = await api.get(`/repos/${newRepo}`);

    const data = {
      name: response.data.full_name,
    };

    this.setState({
      repositories: [...repositories, data],
      newRepo: '',
    });
  };

  render() {
    const { newRepo, repositories } = this.state;

    return (
      <Container>
        <div>
          <Button className="button-voltar">
            <Link to="/manager" className="voltar">
              Come Back <FcUndo size="22" />
            </Link>
          </Button>
        </div>
        <h1>
          <FcDocument />
          New Repository
        </h1>
        <Ul>
          {repositories.map((repository) => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <Link href="#">Detalhes</Link>
            </li>
          ))}
        </Ul>

        <List onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter your text..."
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <SubmitButton>
            Submit... <FcRightUp2 size="20" />
          </SubmitButton>
        </List>
      </Container>
    );
  }
}

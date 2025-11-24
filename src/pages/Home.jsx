import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="admin-home">

      {/* ====== TÍTULO ====== */}
      <header className="admin-header">
        <h1>Painel Administrativo - MultiMix</h1>
        <p>Gerencie produtos, usuários e o estoque da sua loja.</p>
      </header>

      {/* ====== AÇÕES RÁPIDAS ====== */}
      <section className="quick-actions">
        <h2>Ações rápidas</h2>

        <div className="actions-grid">

          <Link to="/products" className="action-card">
            <h3>Gerenciar Produtos</h3>
            <p>Editar, excluir e adicionar novos produtos.</p>
          </Link>

          <Link to="/products" className="action-card">
            <h3> Adicionar Produto</h3>
            <p>Cadastre um novo item no estoque rapidamente.</p>
          </Link>

          <Link to="/login" className="action-card">
            <h3>Usuários</h3>
            <p>Controle de usuários e permissões (em breve).</p>
          </Link>

        </div>
      </section>

      {/* ====== ESTATÍSTICAS ====== */}
      <section className="stats">
        <h2>Resumo da Loja</h2>

        <div className="stats-grid">

          <div className="stat-card">
            <h3>Produtos cadastrados</h3>
            <span className="stat-number">+120</span>
          </div>

          <div className="stat-card">
            <h3>Produtos adicionados hoje</h3>
            <span className="stat-number">5</span>
          </div>

          <div className="stat-card">
            <h3>Usuários ativos</h3>
            <span className="stat-number">12</span>
          </div>

        </div>
      </section>

    </div>
  );
}

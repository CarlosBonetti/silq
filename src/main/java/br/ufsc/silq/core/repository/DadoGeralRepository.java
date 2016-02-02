package br.ufsc.silq.core.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.ufsc.silq.core.entities.DadoGeral;
import br.ufsc.silq.core.entities.Usuario;

public interface DadoGeralRepository extends JpaRepository<DadoGeral, Long> {

	DadoGeral findByUsuario(Usuario usuario);

	void deleteByUsuario(Usuario usuario);
}
package br.ufsc.silq.core.forms;

import org.hibernate.validator.constraints.NotBlank;

public class SolrSearchQuery {

	@NotBlank
	public String query;

}

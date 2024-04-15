package com.bosch.whm.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="shelf")
public class Shelf {
	@Id
	private Integer shelfId;
}

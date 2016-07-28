package home.loggings.contact

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.ManyToOne

@Entity
class Contact {
    @Id @GeneratedValue
    Long id;
    Date birthdate
    String firstname
    String lastname
    @ManyToOne()
    Address address
}

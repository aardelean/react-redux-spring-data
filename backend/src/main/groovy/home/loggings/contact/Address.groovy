package home.loggings.contact

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.Id
import javax.persistence.OneToMany

@Entity
class Address {
    @Id @GeneratedValue
    Long id
    String country
    String city
    String plz
    String street
    Integer streetno
    @OneToMany(mappedBy = "address")
    List<Contact> contacts
}

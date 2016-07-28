package home.loggings.contact

import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.data.rest.core.annotation.RestResource

@RestResource(path = "items")
interface Endpoint extends PagingAndSortingRepository<Contact, Long>{
}

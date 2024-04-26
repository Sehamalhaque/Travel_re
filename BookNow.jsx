import React from 'react'
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap'
import Subtitle from './../shared/subtitle'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'
//import Testimonials from '../components/Testimonial/Testimonials'
import NewsLetter from '../shared/Newsletter'


const BookNow = () => {
    return <>

       {/* ========== FEATURED BOOK SECTION START ========== */}
       <section>
          <Container>
             <Row>
                <Col lg='12' className='mb-5'>
                   <Subtitle subtitle={'Explore'} />
                   <h2 className='featured__tour-title'>Our featured tours</h2>
                </Col>
                <FeaturedTourList />
             </Row>
          </Container>
       </section>
       
       {/* ========== FEATURED BOOK SECTION END =========== */}
 
 
 
 
 
 
 

       <NewsLetter />
    </>
 }
 
 export default BookNow
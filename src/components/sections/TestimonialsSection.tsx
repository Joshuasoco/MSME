import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

const TestimonialsSection = () => (
    <section id="testimonials" className="msme-section" aria-labelledby="testimonials-heading">
        <div className="msme-container">
            <motion.header
                className="msme-section-header"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
            >
                <p className="msme-eyebrow">Stories from the community</p>
                <h2 id="testimonials-heading">Para sa tunay na negosyo</h2>
                <p>Mga kwento ng Filipino entrepreneurs na nagsisimula at patuloy na lumalago.</p>
            </motion.header>

            <div className="msme-card-grid msme-card-grid--three">
                {TESTIMONIALS.map((testimonial, index) => (
                    <motion.article
                        key={testimonial.name}
                        className="msme-card msme-card--testimonial"
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.22, delay: index * 0.04, ease: 'easeOut' }}
                    >
                        <Quote className="msme-card__icon" size={22} strokeWidth={1.7} aria-hidden="true" />
                        <p className="msme-testimonial__quote">“{testimonial.quote}”</p>
                        <div className="msme-testimonial__person">
                            <img src={testimonial.avatar} alt="" loading="lazy" decoding="async" />
                            <div>
                                <strong>{testimonial.name}</strong>
                                <span>{testimonial.role}</span>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </div>
    </section>
);

export default TestimonialsSection;

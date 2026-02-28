import { useRef } from 'react';
import type { LucideIcon } from 'lucide-react';
import { Layers, Database, Cpu, Shield, Mail, Server } from 'lucide-react';
import { AnimatedBeam } from '@/components/ui/animated-beam';

type StackNodeProps = {
    label: string;
    icon: LucideIcon;
    nodeRef: React.RefObject<HTMLDivElement | null>;
};

const StackNode = ({ label, icon: Icon, nodeRef }: StackNodeProps) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <div
                ref={nodeRef}
                className="h-14 w-14 rounded-full border border-slate-200 bg-white shadow-[0_6px_16px_rgba(15,23,42,0.08)] flex items-center justify-center"
            >
                <Icon className="h-6 w-6 text-slate-700" />
            </div>
            <p className="text-center text-xs sm:text-sm font-medium text-slate-600 leading-snug max-w-[10rem]">
                {label}
            </p>
        </div>
    );
};

const GrokLogo = () => {
    return (
        <svg
            viewBox="0 0 40 40"
            aria-hidden="true"
            className="h-10 w-10"
        >
            <circle cx="20" cy="20" r="19" fill="#0f172a" />
            <path
                d="M12 11h16l-8 9 8 9H12l8-9-8-9Z"
                fill="#f8fafc"
                opacity="0.95"
            />
        </svg>
    );
};

const TestimonialsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const centerRef = useRef<HTMLDivElement>(null);

    const djangoRef = useRef<HTMLDivElement>(null);
    const mongodbRef = useRef<HTMLDivElement>(null);
    const pytorchRef = useRef<HTMLDivElement>(null);

    const jwtRef = useRef<HTMLDivElement>(null);
    const gmailRef = useRef<HTMLDivElement>(null);
    const gunicornRef = useRef<HTMLDivElement>(null);

    const leftNodes = [
        { label: 'Django + REST Framework', icon: Layers, ref: djangoRef },
        { label: 'MongoDB Atlas', icon: Database, ref: mongodbRef },
        { label: 'PyTorch + MobileNetV2', icon: Cpu, ref: pytorchRef },
    ];

    const rightNodes = [
        { label: 'JWT + 2FA TOTP', icon: Shield, ref: jwtRef },
        { label: 'Gmail SMTP', icon: Mail, ref: gmailRef },
        { label: 'Gunicorn + WhiteNoise', icon: Server, ref: gunicornRef },
    ];

    const nodeRefs = [
        djangoRef,
        mongodbRef,
        pytorchRef,
        jwtRef,
        gmailRef,
        gunicornRef,
    ];

    const curvatures = [42, 0, -42, 42, 0, -42];

    return (
        <section id="testimonials" className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
            <div className="absolute inset-0">
                <div
                    className="absolute inset-0 opacity-50"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(148,163,184,0.2) 1px, transparent 0)',
                        backgroundSize: '28px 28px',
                    }}
                />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                        Powered by a Stack Built for the Underserved.
                    </h2>
                    <p className="mt-5 text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        From intelligent loan screening to secure document recognition - every layer of MSME Pathways is engineered
                        to bring formal financial access to every Filipino microentrepreneur.
                    </p>
                </div>

                <div
                    ref={containerRef}
                    className="relative mt-14 max-w-5xl mx-auto rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
                >
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-10 md:gap-8">
                        <div className="flex flex-col items-center gap-8 md:gap-10">
                            {leftNodes.map((node) => (
                                <StackNode key={node.label} label={node.label} icon={node.icon} nodeRef={node.ref} />
                            ))}
                        </div>

                        <div className="flex flex-col items-center gap-3">
                            <div
                                ref={centerRef}
                                className="h-24 w-24 rounded-full border border-slate-300 bg-white shadow-[0_14px_30px_rgba(15,23,42,0.14)] flex items-center justify-center"
                            >
                                <GrokLogo />
                            </div>
                            <p className="text-center text-xs sm:text-sm font-semibold text-slate-700 leading-snug max-w-[11rem]">
                                Grok (llama-3.1-8b-instant)
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-8 md:gap-10">
                            {rightNodes.map((node) => (
                                <StackNode key={node.label} label={node.label} icon={node.icon} nodeRef={node.ref} />
                            ))}
                        </div>
                    </div>

                    {nodeRefs.map((ref, index) => (
                        <div key={`beam-${index}`}>
                            <AnimatedBeam
                                containerRef={containerRef}
                                fromRef={ref}
                                toRef={centerRef}
                                curvature={curvatures[index]}
                                pathColor="#cbd5e1"
                                pathOpacity={0.6}
                                pathWidth={1.4}
                                gradientStartColor="#94a3b8"
                                gradientStopColor="#64748b"
                                delay={index * 0.12}
                                duration={4.6 + (index * 0.2)}
                            />
                            <AnimatedBeam
                                containerRef={containerRef}
                                fromRef={ref}
                                toRef={centerRef}
                                curvature={curvatures[index]}
                                reverse
                                pathColor="#cbd5e1"
                                pathOpacity={0}
                                pathWidth={1.4}
                                gradientStartColor="#e2e8f0"
                                gradientStopColor="#94a3b8"
                                delay={0.35 + (index * 0.12)}
                                duration={4.9 + (index * 0.2)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;

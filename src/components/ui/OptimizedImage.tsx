import { useState, useCallback, memo, type ImgHTMLAttributes } from "react";
import { cn } from "../../utils/cn";

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    fallback?: string;
    skeletonCls?: string;
}

const OptimizedImage = memo(function OptimizedImage({
    src, alt = "", fallback = "", className, skeletonCls, ...props
}: OptimizedImageProps) {
    const [loaded, setLoaded] = useState(false);
    const [errored, setErrored] = useState(false);
    const [current, setCurrent] = useState(src);

    const onLoad = useCallback(() => setLoaded(true), []);
    const onError = useCallback(() => {
        if (!errored) { setErrored(true); setCurrent(fallback); }
    }, [errored, fallback]);

    return (
        <>
            {!loaded && <div className={cn("absolute inset-0 bg-white/[0.04] animate-pulse", skeletonCls)} />}
            <img
                src={current}
                alt={alt}
                loading="lazy"
                onLoad={onLoad}
                onError={onError}
                className={cn(
                    "w-full h-full object-cover select-none transition-opacity duration-300",
                    loaded ? "opacity-100" : "opacity-0"
                )}
                {...props}
            />
        </>
    );
});

export default OptimizedImage;
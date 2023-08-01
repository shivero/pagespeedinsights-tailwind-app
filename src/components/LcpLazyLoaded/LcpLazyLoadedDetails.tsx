import ScoreIcon from '../ScoreIcon';
import { LcpLazyLoadedSchema, LcpLazyLoadedType } from '../../types/LcpLazyLoadedSchema';
import { z } from 'zod';
import createdompurify from 'dompurify';
import { Link } from '../Link';
import React, { FC, HTMLAttributes } from 'react';
const LcpLazyLoadedDetails = ({ audit }: { audit: LcpLazyLoadedType }) => {
    try {
        LcpLazyLoadedSchema.parse(audit);
    }
    catch (error) {
        if (error instanceof z.ZodError) {
            console.error(error.issues);
            return null;
        }
    }
    const sanitizedSnippet = createdompurify.sanitize(audit.details.items[0].node.snippet);
    return (

        <details open={audit.score === 0}>
            <summary>
                <h3 className='inline-flex mt-4 translate-y-0.5 items-center text-xl'>
                    <ScoreIcon score={audit.score} />
                    {audit.title} - {audit.score} (scoreDisplayMode: {audit.scoreDisplayMode})
                </h3>
            </summary>
            <MdDescription className='text-slate-900 mt-4' value={audit.description} />
            <div className="text-xl">Details ({audit.details.type})</div>
            <table className='table border-collapse border border-slate-200 w-full'>
                <thead>
                    {audit.details.headings.map((heading, index) => {
                        return (
                            <tr className='bg-slate-100' key={index}>
                                <td className="text-md">{heading.label}</td>
                            </tr>
                        )
                    }
                    )}
                </thead>
                <tbody>
                    {audit.details.items.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td className="text-lg">
                                    <div className="text-lg">{item.node.nodeLabel}</div>
                                    Element Path: {item.node.path}
                                    <div className="text-lg"></div>
                                    <details>
                                        <summary>Bounding Rect</summary>
                                        <div className="text-sm">Width: {item.node.boundingRect.width}</div>
                                        <div className="text-sm">Height: {item.node.boundingRect.height}</div>
                                        <div className="text-sm">Top: {item.node.boundingRect.top}</div>
                                        <div className="text-sm">Right: {item.node.boundingRect.right}</div>
                                        <div className="text-sm">Bottom: {item.node.boundingRect.bottom}</div>
                                        <div className="text-sm">Left: {item.node.boundingRect.left}</div>
                                    </details>
                                    <div>Element: <div><code className='text-sm'>{sanitizedSnippet}</code></div></div>
                                    <div>Selector: <div><code className='text-sm'>{item.node.selector}</code></div></div>
                                </td>
                            </tr>
                        )
                    }
                    )}
                </tbody>

            </table>
        </details>
    );
}


interface IMdDescription extends HTMLAttributes<HTMLDivElement> {
    value: string;
}

const MdDescription: FC<IMdDescription> = ({ value, children, ...htmlAttributes }) => {
    if (!value) return null;
    const insideBracketsText = value.substring(value.indexOf('[') + 1, value.indexOf(']'));
    const insideParenthesesText = value.substring(value.indexOf('(') + 1, value.indexOf(')'));
    const description = value.replace(insideBracketsText, '').replace(insideParenthesesText, '').replace('[]', '').replace('()', '').replace(' .', '');
    return (<>
        <p {...htmlAttributes}>{description} {Link(insideParenthesesText, insideBracketsText)}</p>
    </>)
}


export default LcpLazyLoadedDetails;



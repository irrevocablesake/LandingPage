import {
    ModelsSetOneComponent, ModelsSetTwoComponent,
    ModelsSetThreeComponent, ModelsSetFourthComponent, 
    ModelsSetFifthComponent, ModelsSetSixthComponent, 
    ModelsSetSeventhComponent, ModelsSetEightComponent 
} from './ModelImports'

export default function Models( { nodes } )
{
    return(
        <>
            <ModelsSetOneComponent nodes = { nodes } /> 
            <ModelsSetTwoComponent nodes = { nodes } />
            <ModelsSetThreeComponent nodes = { nodes } />
            <ModelsSetFourthComponent nodes = { nodes } />
            <ModelsSetFifthComponent nodes = { nodes } />
            <ModelsSetSixthComponent nodes = { nodes } />
            <ModelsSetSeventhComponent nodes = { nodes } />
            <ModelsSetEightComponent nodes = { nodes } />
        </>
    )
}
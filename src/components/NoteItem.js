import React from 'react'

const NoteItem = (props) => {
    const { note } = props;
    return (
        <div>
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">{note.title}</div>
                        <p class="text-gray-700 text-base">
                            {note.description}
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{note.tag}</span>
                        
                    </div>
            </div>
        </div>
    )
}

export default NoteItem

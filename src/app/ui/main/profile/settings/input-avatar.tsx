'use client'

import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
import FilePondPluginImageEdit from 'filepond-plugin-image-edit'

import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import { useState } from 'react'


export default function InputAvatar({ avatar }: { avatar: string }) {
	const [showPreview, setShowPreview] = useState(true);

	registerPlugin(
		FilePondPluginFileValidateType,
		FilePondPluginImageExifOrientation,
		FilePondPluginImagePreview,
		FilePondPluginImageCrop,
		FilePondPluginImageResize,
		FilePondPluginImageTransform,
		FilePondPluginImageEdit,
	);

	return (
		<div>
			{showPreview && <img className="rounded-full w-40 aspect-square mx-auto mb-3" src={avatar} alt="profile picture" />}

			<FilePond
				name="profile_img"
				allowImageEdit={true}
				acceptedFileTypes={['image/*']}
				labelIdle='Arrastrar y soltar imagen o <span class="filepond--label-action">Explorar</span>'
				imageCropAspectRatio='1:1'
				imagePreviewHeight={160}
				imageResizeTargetHeight={160}
				imageResizeTargetWidth={160}
				imageTransformOutputMimeType={'image/jpeg'}
				storeAsFile={true}
				credits={false}
				onaddfile={() => {
					setShowPreview(false)
				}}
			/>
		</div>
	)
}
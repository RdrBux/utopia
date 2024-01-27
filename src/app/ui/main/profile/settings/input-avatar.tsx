'use client'

import { FilePond, registerPlugin } from 'react-filepond'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginImageCrop from 'filepond-plugin-image-crop'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
import FilePondPluginImageEdit from 'filepond-plugin-image-edit'
import { useRef, useState } from 'react'

import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'


export default function InputAvatar() {
	const input = useRef<HTMLInputElement>(null);

	registerPlugin(
		FilePondPluginFileValidateType,
		FilePondPluginImageExifOrientation,
		FilePondPluginImagePreview,
		FilePondPluginImageCrop,
		FilePondPluginImageResize,
		FilePondPluginImageTransform,
		FilePondPluginImageEdit
	);

	return (
		<div>
			<FilePond
				name="profile_img"
				acceptedFileTypes={['image/*']}
				labelIdle='Arrastrar y soltar imagen o <span class="filepond--label-action">Explorar</span>'
				imagePreviewHeight={200}
				imageCropAspectRatio='1:1'
				imageResizeTargetHeight={200}
				imageResizeTargetWidth={200}
				imageTransformOutputQuality={0.5}
				storeAsFile={true}
			/>
		</div>
	)
}